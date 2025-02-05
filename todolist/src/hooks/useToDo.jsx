import { use } from "react";
import { useState } from "react";

const useToDo = () => {
    const [todo, setTodo] = useState([])

    const addTask = (userInput) => {
        setTodo([...todo, {id:crypto.randomUUID(), checked: false, name: userInput}]);
    }

    const deleteTask = (t) => {
        let updatedTodos = todo.filter((item) => item.id !== t.id)
        setTodo([...updatedTodos])
    }

    const handleCheck = (t) => {
        [...todo].forEach((item) => {
            if (item.id === t.id) {
                t.checked = !t.checked
            }
        });
        setTodo([...todo])
    }

    const deleteSelection = () => {
        let updatedTodos = todo.filter((item) => item.checked === false)
        setTodo([...updatedTodos])
    }

    const selectAll = () => {
        [...todo].map((t => 
            t.checked = true
        ))
        setTodo([...todo])
    }

    const deselectAll = () => {
        [...todo].map((t => 
            t.checked = false
        ))
        setTodo([...todo])
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
