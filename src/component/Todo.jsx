import React from 'react'

function todo({todoelement, deltodo, index}) {
  return (
    <div className='todo'>
      <p> {todoelement} </p>
      <div className='actions'>
        <input type="checkbox" name="checked" id="checked_box" />
        <button onClick={()=> deltodo(index)}>Delete</button>
      </div>
    </div>
  )
}

export default todo