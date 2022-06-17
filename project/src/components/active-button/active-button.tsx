import { useSelector } from 'react-redux';
import { ToDoItem } from '../../types/to-do-item';
import { TaskType } from '../../const';
import {selectActiveTasks} from '../../store/task-list/selectors';

type ActiveButtonProps = {
    onSetTasks: (value: ToDoItem[]) => void
    currentType: TaskType
  onSetCurrentType: (value: TaskType) => void
}
function ActiveButton ({onSetTasks, currentType, onSetCurrentType}: ActiveButtonProps):JSX.Element {

  const tasks = useSelector(selectActiveTasks());

  const handleActiveButtonClick = () => {
    onSetCurrentType(TaskType.Active);
    onSetTasks(tasks);
  };

  return (<button type="button" className={`${currentType === TaskType.Active ? 'active-button' : ''}`} onClick={handleActiveButtonClick}>Active</button>);
}

export default ActiveButton;
