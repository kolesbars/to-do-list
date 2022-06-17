import { useSelector } from 'react-redux';
import { ToDoItem } from '../../types/to-do-item';
import { TaskType } from '../../const';
import { getTasks } from '../../store/task-list/selectors';

type AllButtonProps = {
    onSetTasks: (value: ToDoItem[]) => void
    currentType: TaskType
    onSetCurrentType: (value: TaskType) => void
}
function AllButton ({onSetTasks, currentType, onSetCurrentType}: AllButtonProps):JSX.Element {

  const tasks = useSelector(getTasks);

  const handleAllButtonClick = () => {
    onSetCurrentType(TaskType.All);
    onSetTasks(tasks);
  };

  return (<button type="button" className={`${currentType === TaskType.All ? 'active-button' : ''}`} onClick={handleAllButtonClick}>All</button>);
}

export default AllButton;
