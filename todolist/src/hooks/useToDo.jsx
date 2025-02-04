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

    return {
        todo,
        addTask,
        deleteTask
    };
}

export default useToDo;
