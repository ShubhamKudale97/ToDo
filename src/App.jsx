import { useState } from 'react';
import './App.css';
import InputContainer from './component/inputContainer';
import ListContainer from './component/listContainer';

function App() {
 
  const [inputVal, setInputVal] = useState('');
  
  const [todos, setTodos] = useState([]);

  function writeTodo(e){
    setInputVal(e.target.value)
  }

  function addTodo(){
    if (inputVal != '') {
      setTodos((prevTodos) =>[...prevTodos, inputVal]); // ... is a spread operator
      setInputVal('');
    } else {
      alert('Enter the Task first');
    }
  }

  function delTodo(todoIndex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos, prevTodosIndex)=>{return prevTodosIndex != todoIndex})
  )}

  // console.log(todos);

  return (
    <>
      <main>

        <h1> To Do List </h1>

        <InputContainer inputVal={inputVal} wroteTodo={writeTodo} addToDo={addTodo}/>

        <ListContainer todosL={todos} delTodo={delTodo}/>

      </main>
    
    </>
  )
}


export default App
