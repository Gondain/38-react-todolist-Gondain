import React, { useState } from "react"

// composant (ToDoListForm) avec une props (userInputValue) 
const ToDoListForm = ({userInputValue}) => {
    
    const [userInput, setUserInput] = useState ('')

    // trigger le useState a chaque changement pour qu'il soit a jour
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    // envoyé au props la valeur de l'input et remet le champ vide
    const submitClick = () => {
        if(userInput.trim() === "") {
            return;
        }
        userInputValue(userInput);
        setUserInput('')
    }

    const submitEnter = (event) => {
        if(userInput.trim() === "" || event.key !== 'Enter') {
            return;
        }
        userInputValue(userInput);
        setUserInput('')
    }

    return (
        <>
            {/* onChange qui permet d'enregister la value saisie dans le useState */}
            <input className="inputText" type="text" value={userInput} onChange={handleChange} placeholder="Enter a new task..." onKeyDown={submitEnter}/>
            {/* onClick qui permet d'envoyé la valeur de l'input */}
            <button className="submitButton" onClick={submitClick}>ADD TODO</button>
        </>
    )
}

export default ToDoListForm;