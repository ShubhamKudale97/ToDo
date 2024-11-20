import React from 'react'
import Todo from './Todo'

function ListContainer({todosL, delTodo}) {
  return (
    <div className='list-container'>
       {todosL.map((todoEle, index)=>{
        return(
        <Todo todoelement={todoEle} index={index} deltodo={delTodo}/>
        )
       })}
    </div>
  )
}

export default ListContainer