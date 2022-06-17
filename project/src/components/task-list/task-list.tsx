import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ToDoItem } from '../../types/to-do-item';
import { changeStatus } from '../../store/action';

type TaskListProps = {
  tasks: ToDoItem[],
}

function TaskList({tasks}: TaskListProps):JSX.Element {

  const dispatch = useDispatch();

  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(e.target.id));
  };

  return (
    <ul className='task-list' data-testid='task-list'>
      {tasks.map((task) => (
        <li className='item' key={task.id} data-testid='task-list-item'>
          <label className='item_label'>
            <input type='checkbox' className='item_checkbox' id={task.id} checked={task.isChecked} onChange={handleChangeStatus} name='item'/>
            <span className='item_box'></span>
            <span className='item_text'>{task.task}</span>
          </label>
        </li>))}
    </ul>);
}

export default TaskList;
