import { clearCompletedTasks } from '../../store/action';
import { useDispatch } from 'react-redux';
import { TaskType } from '../../const';

type ClearButtonProps = {
  onSetCurrentType: (value: TaskType) => void
}

function ClearButton ({onSetCurrentType}: ClearButtonProps):JSX.Element {

  const dispatch = useDispatch();


  const handleClearButtonClick = () => {
    onSetCurrentType(TaskType.All);
    dispatch(clearCompletedTasks());
  };

  return (<button className='clear-button' type="button" onClick={handleClearButtonClick}>Clear completed</button>);
}

export default ClearButton;
