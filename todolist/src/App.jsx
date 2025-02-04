import './App.css'
// importe le formulaire
import ToDoListForm from './components/ToDoListForm'
import ToDoList from './components/ToDoList'
import useToDo from './hooks/useToDo'

function App() {

  const {
    todo,
    addTask,
    deleteTask,
    handleCheck,
    deleteSelection,
    selectAll,
    deselectAll
  } = useToDo();

  return (
    <>
    <header>
      <h1>My Todo App</h1>
    </header>
    <main>
      {/* On le positionne au bonne endroit */}
      {/* On passe en attribut notre props qui est égale a l'endroit ou on veut l'envoyé  */}
      {/* l'input est envoyé dans le useTodo dans fonction addTask */}
      <ToDoListForm 
        userInputValue={addTask}/>
      <hr/>
      <section>
        <div>
          <h2>Todos</h2>
          <ToDoList 
            todo={todo} 
            deleteTodo={deleteTask} 
            handleCheck={handleCheck}
            deleteSelection={deleteSelection}
            selectAll={selectAll}
            deselectAll={deselectAll}/>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
