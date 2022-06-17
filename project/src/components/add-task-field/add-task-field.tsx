import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/action';
import { nanoid } from 'nanoid';
import {useState, ChangeEvent, FormEvent} from 'react';

function AddTaskField() :JSX.Element {

  const dispatch = useDispatch();

  const [fieldValue, setFieldValue] = useState('');

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value);
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNewTask({
      task: fieldValue,
      isChecked: false,
      id: nanoid(),
    }));
    setFieldValue('');
  };

  return (
    <form onSubmit={handleAddTask} data-testid='add-form'>
      <input
        className='add-field'
        type='text'
        value={fieldValue}
        onChange={handleChangeValue}
        placeholder='What needs to be done?'
        data-testid='add-field'
      />
    </form>);
}

export default AddTaskField;
