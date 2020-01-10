import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';
import ToDoForm from './components/ToDoForm.js';

function App() {
    const [toDos, setToDos] = useState(todos);

    const handleAddTodo = (toDo) => {
        let todoAdded = [...toDos, toDo];
        setToDos(todoAdded);
    }
    const handleRemoveTodo = (index) => {
        setToDos(toDos.filter((e, i)=>{
            return i!== index
        }))
    }
    const todosCard = toDos.map((todo,i)=>{
        return (
            <div className="col-md-4" key={i}>
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{todo.title}</h3>
                        <span className="badge badge-pill badge-warning ml-2">
                            {todo.priority}
                        </span>
                    </div>
                    <div className="card-body">
                        <p>{todo.description}</p>
                        <p>
                            <strong>
                                <mark>
                                    {todo.responsible}
                                </mark>
                            </strong>
                        </p>
                    </div>
                    <div className="card-footer">
                        <button
                            className="btn btn-danger"
                            onClick={handleRemoveTodo.bind(this, i)}
                        >
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        )
        })

    return (
    <div className="App">

        <nav className="navbar navbar-dark bg-dark">
            <a className="text-white" href="/">
                Tasks
                <span className="badge badge-pill badge-light ml-2">
                    {todosCard.length}
                </span>
            </a>
        </nav>

        <div className="container">
            <div className="row mt-4">
                <div className="col-md-4 text-center">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ToDoForm onAddTodo={handleAddTodo}/>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        {todosCard}
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;
