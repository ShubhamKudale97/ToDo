import React from 'react'

function InputContainer({inputVal, wroteTodo, addToDo}) {
  return (
    <div className='input-container'>
    <input type="text" name="task" id="task" placeholder='Enter the Task' value={inputVal} onChange={wroteTodo}/>
    <button  id="plus_btn" onClick={addToDo}>+</button>
  </div>
  )
}

export default InputContainer