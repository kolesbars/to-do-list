import AllButton from '../all-button/all-button';
import ActiveButton from '../active-button/active-button';
import CompletedButton from '../completed-button/completed-button';
import ClearButton from '../clear-button/clear-button';
import { useSelector } from 'react-redux';
import { TaskType } from '../../const';
import { ToDoItem } from '../../types/to-do-item';
import { getTasks } from '../../store/task-list/selectors';

type ControlPanelProps = {
  currentType: TaskType
  onSetCurrentType: (value: TaskType) => void
  onSetTasks: (value: ToDoItem[]) => void
}

function ControlPanel ({onSetTasks, currentType, onSetCurrentType}: ControlPanelProps):JSX.Element {

  const tasks = useSelector(getTasks);

  const leftItemsCount = tasks.filter((task) => task.isChecked === false).length;

  return (
    <div className='controls-panel'>
      <p className='count'>{`${leftItemsCount} items left`}</p>
      <div className='buttons-container'>
        <AllButton
          onSetTasks={onSetTasks}
          currentType={currentType}
          onSetCurrentType={onSetCurrentType}
        />
        <ActiveButton
          onSetTasks={onSetTasks}
          currentType={currentType}
          onSetCurrentType={onSetCurrentType}
        />
        <CompletedButton
          onSetTasks={onSetTasks}
          currentType={currentType}
          onSetCurrentType={onSetCurrentType}
        />
      </div>
      <ClearButton
        onSetCurrentType={onSetCurrentType}
      />
    </div>
  );
}

export default ControlPanel;
