import { use } from "react";
import { useState } from "react";

const useToDo = () => {
    const [todo, setTodo] = useState([])

    const addTask = (userInput) => {
        setTodo([...todo, {id: Date.now(), checked: false, name: userInput}]);
        console.log(todo);
    }

    const deleteTask = (t) => {
        let updatedTodos = todo.filter((item) => item.id !== t.id)
        setTodo([...updatedTodos])
    }

    const handleCheck = (t) => {
    }

    const deleteSelection = () => {
        let updatedTodos = todo.filter((item) => item.checked === false)
        setTodo([...updatedTodos])
    }

    const selectAll = () => {
        let newList = [...todo]
        {newList.map((t => 
            t.checked = true
        ))}
        setTodo(newList)
    }

    const deselectAll = () => {
        let newList = [...todo]
        {newList.map((t => 
            t.checked = false
        ))}
        setTodo(newList)
    }

    return {
        todo,
        addTask,
        deleteTask,
        handleCheck,
        deleteSelection,
        selectAll,
        deselectAll
    };
}

export default useToDo;
