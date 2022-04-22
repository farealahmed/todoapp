// todo list axios get from server and render todo list
import React from 'react';
import axios from 'axios';
import { Link, Outlet } from "react-router-dom";


const TodoList = () => {
    const [todos, setTodos] = React.useState([]);

    const getTodos = async () => {
        const r = await axios.get('http://localhost:3001/api/v1/todos');
        setTodos(r.data.todos);
    }

    React.useEffect(() => {
        getTodos();
    }, []);

    const deleteTodo = async (todoId) => {
        await axios.delete(`http://localhost:3001/api/v1/todos/${todoId}`);
        getTodos();
    }


    return (
        <div>
            <h1>Todo List</h1>
            <Outlet />
            <nav
              style={{
              borderRight: "solid 1px",
              padding: "1rem",
             }}
            >

                {todos.map(todo => (
                    < >
                      <h2>{todo.name}</h2>

                       <Link
                        to={`/list-todo/${todo._id}`}
                        key={`todo-detail-${todo._id}`}
                       >Detail</Link>{' '}

                       <Link
                        to={`/list-todo/edit/${todo._id}`}
                        key={`todo-edit-${todo._id}`}
                       >Edit</Link>{' '}

                       <button style={{background:"none",
                                       border: "none",
                                       //padding: "0!important",
                                       font: "Verdana,sans-serif",
                                       fontSize: "1em",
                                       textAlign:"left",
                                       margin: 0,
                                       padding: 0,
                                       color: "blue",
                                       textDecoration: "underline",
                                       cursor: "pointer",
                                       }} onClick={() => deleteTodo(todo._id)}>Delete</button>

                      
                    </>
                ))}
                
            </nav>
            
        </div>
    );
}
export default TodoList; 
