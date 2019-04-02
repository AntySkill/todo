import React from 'react'

const Todos = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <button className="waves-effect waves-light btn" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left!!</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;