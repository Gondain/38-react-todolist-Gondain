import React from "react"

const ToDoList = ({todo, deleteTodo}) => {
    return (
        <>
        <ul>
            {todo.map((t => 
                <li key={t.id}>
                    <input type="checkbox"/> {t.name} <button onClick={() => deleteTodo(t)}>DELETE</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ToDoList;