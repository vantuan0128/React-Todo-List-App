import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    /*
    Handle the submission of a form
    Takes in an e parameter, representing the event object
    The first line calls the preventDefault() method on the event object 
    to prevent the default action of the form submission.
    This is typically used to prevent the page from refreshing when the form is submitted
    The next line checks if the value variables is truthy. If it is, the addTodo function 
    is called with the value as an argument to add a new todo item to the list.
    After that, the setValue function is called with an empty string to clear the form after submission.
    */
    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}