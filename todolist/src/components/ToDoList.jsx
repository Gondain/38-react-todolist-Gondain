import React from "react"

const ToDoList = ({todo, deleteTodo, handleCheck, deleteSelection, selectAll, deselectAll}) => {
    return (
        <>
        <button onClick={selectAll}>Select All</button>
        <button onClick={deselectAll}>Deselect All</button>
        <ul>
            {todo.map((t => 
                <li key={t.id}>
                    <input type="checkbox" checked = {t.checked}
                    onChange={() => handleCheck(t)}/> 
                    <span className="todoText">{t.name}</span> 
                    <button onClick={() => deleteTodo(t)}>✖️</button>
                </li>
            ))}
        </ul>
        <button onClick={deleteSelection}>Delete selection</button>
        </>
    )
}

export default ToDoList;