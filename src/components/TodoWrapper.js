import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  /*
  Add a new todo item to a list of todos. 
  Takes in a todo parameter and uses the setTodos function to update the state of the todos array.
  The new todo is added to the end of the todos array using the spread operator (...)
  and an object with properties for id, task, completed, isEditing....
  Id property is generated using uuidv4() function, which creates a unique identifier for each todo item.
  */
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  /*
  Delete a todo item from the list of todos.
  Takes in id parameter and uses setTodos function to update the state of the todos array.
  The todos array is filtered using the Array.prototype.filter() method to create a new array
  that includes all todo items except for the one with the matching id.
  The setTodos function is then called with this new array to update the state of the todos array.
  */
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  /*
  Toogle the completion status of a todo item in the list of todos.
  Takes in an id parameter, uses the setTodos function to update the state of the todos array.
  The todos array is mapped over using the Array.prototype.map() method to create a new array.
  For each todo item in the todos array, if its id property matches the id parameter,
  a new object is created with all the properties of the todo item using the spread operator (...)
  and the completed property is set to the opposite of its current value using the logical NOT operator
  . If the id property does not match, the todo item is returned unchanged.
  The setTodos function is then called with this new array to update the state of the todos array.
  */
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  /* 
  Toggle the editing status of a todo item in the list of todos.
  Takes in an id parameter, uses the setTodos function to update the state of the todos array.
  The todos array is mapped over using Array.prototype.map() method to create a new array.
  For each todo item in the todos array, if its id property matches the id parameter, a new object is created
  with al the properties of its current value using the logical NOT operator
  If the id does not match, the todo item is returned unchanged.
  The setTodos function is then called with this new array to update the state of the todos array. 
  */
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  /*
  Edit the task of a todo item in the list of todos.
  Takes in 2 parameters: task and id.
  setTodos function is used to update the state of the todos array.
  The todos array is mapped over using the Array.protype.map() method to create a new array.
  For each todo item in the todos array, if its id property matches the id parameter, a new object if created with
  all the properties of the todo item using the spread operator (...).
  The task property is set to the value of the task parameter and the isEditing property is
  set to the opposite of its current value using the logical NOT operator.
  If the id does not match, the todo item is returned unchanged. 
  */
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>To do List !</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      /*
      The todos array is mapped over using the Array.prototype.map() method to create an array of
      components for each todo item. For each todo item, if its isEditing property is true,
      an EditTodoForm component is rendered. This component takes in two props: editTodo,
      which is a function used to edit the task of the todo item, and task, which is the todo item itself.
      If the isEditing property is false, a Todo component is rendered. This component takes in several props:
      key, which is set to the value of the todo item’s id property; task, which is the todo item itself;
      deleteTodo, which is a function used to delete the todo item; editTodo, which is a function used to toggle the editing status of the todo item;
      and toggleComplete, which is a function used to toggle the completion status of the todo item.
      */
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};