import React, { useState, useEffect } from 'react';
import Form from './Form';
import Todo from './Todo';

function List() {

  const [todos, setTodos] = useState(() => {
		const savedItems = localStorage.getItem("items");	
		if (savedItems) {	
		  return JSON.parse(savedItems);	
		} else {	
		  return [];	
		}	
	  });

    useEffect(() => {
	    const lsItems = localStorage.getItem("items");
	    if (!lsItems) localStorage.setItem("items", JSON.stringify(todos));
	    else setTodos(JSON.parse(lsItems));
      // eslint-disable-next-line
	  }, []);

    useEffect(() => {
	    localStorage.setItem("items", JSON.stringify(todos));
	  }, [todos]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log (...todos);
    };

    const updateTodo = (todoId, newValue) =>{
      if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
      }

      setTodos(prev => prev.map(item => (item.id === todoId ? newValue :item))
      );
    };


    const removeTodo = id => {
      const removerArr = [...todos].filter(todo => todo.id !== id);
      setTodos(removerArr);
    };
    

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id){
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  return (
    <div>        
        <Form onSubmit={addTodo} />
        <Todo
         todos={todos}
         completeTodo={completeTodo}
         removeTodo={removeTodo}
         updateTodo={updateTodo}
         />
    </div>
  )
}

export default List