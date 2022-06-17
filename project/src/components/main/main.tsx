import TaskList from '../task-list/task-list';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ControlPanel from '../control-panel/control-panel';
import AddTaskField from '../add-task-field/add-task-field';
import { ToDoItem } from '../../types/to-do-item';
import { updateTasks } from '../../store/action';
import { TaskType } from '../../const';
import { getTasks} from '../../store/task-list/selectors';


function Main (): JSX.Element {

  const dispatch = useDispatch();

  const storeTasks = useSelector(getTasks);

  const [tasks, setTasks] = useState<ToDoItem[]>([]);
  const [currentType, setCurrentType] = useState(TaskType.All);


  useEffect(() => {
    const storegedItems = localStorage.getItem('tasks');
    if (storegedItems !== null) {
      dispatch(updateTasks(JSON.parse(storegedItems)));
    }
  }, []);

  useEffect(() => {
    setTasks(storeTasks);
    setCurrentType(TaskType.All);
    localStorage.setItem('tasks', JSON.stringify(storeTasks));
  }, [storeTasks]);

  return (
    <main className="main">
      <h1>todos</h1>
      <section className='content'>
        <AddTaskField/>
        <TaskList
          tasks={tasks}
        />
        <ControlPanel
          currentType={currentType}
          onSetCurrentType={setCurrentType}
          onSetTasks={setTasks}
        />
      </section>
    </main>);
}

export default Main;
