import React from 'react'
import List from './List'

function TodoApp() {

  
  return (
    <>
    <h1 className='header'>What's the Plan for Today?</h1>
    <div className='todo-app'>
      <List />
    </div>
    </>
    
  )
}

export default TodoApp