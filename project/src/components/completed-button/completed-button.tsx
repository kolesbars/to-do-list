import { useSelector } from 'react-redux';
import { ToDoItem } from '../../types/to-do-item';
import { TaskType } from '../../const';
import { selectCompletedTasks } from '../../store/task-list/selectors';

type CompletedButtonProps = {
    onSetTasks: (value: ToDoItem[]) => void
    currentType: TaskType
    onSetCurrentType: (value: TaskType) => void
}
function CompletedButton ({onSetTasks, currentType, onSetCurrentType}: CompletedButtonProps):JSX.Element {

  const tasks = useSelector(selectCompletedTasks());

  const handleCompletedButtonClick = () => {
    onSetCurrentType(TaskType.Completed);
    onSetTasks(tasks);
  };

  return (<button type="button" className={`${currentType === TaskType.Completed ? 'active-button' : ''}`} onClick={handleCompletedButtonClick}>Completed</button>);
}

export default CompletedButton;
