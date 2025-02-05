import React from "react"

const ToDoList = ({todo, deleteTodo, handleCheck, deleteSelection, selectAll, deselectAll}) => {
    return (
        <>
        <hr />
            <button className="submitButton selectAll" onClick={selectAll}>Select All</button>
            <button className="submitButton" onClick={deselectAll}>Deselect All</button>
            <div className="todolist">
                <ul>
            {todo.map((t => 
                <li key={t.id} className="todo">
                    <input className="checkbox" type="checkbox" checked = {t.checked}
                    onChange={() => handleCheck(t)}/>
                    <span className="todoText">{t.name}</span> 
                    <button onClick={() => deleteTodo(t)}>❌</button>
                </li>
            ))}
                </ul>
            </div>
        <button className="submitButton" onClick={deleteSelection}>Delete selection</button>
        </>
    )
}
export default ToDoList;