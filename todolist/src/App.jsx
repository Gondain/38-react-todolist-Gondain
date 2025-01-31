import './App.css'
import Task from './Task'

function App() {

  return (
    <>
    <header>
      <h1>My Todo App</h1>
    </header>
    <main>
      <form className='input-container'>
        <input className='input' type="text" id = 'type' />
      </form>
      <button className='button'>Add Todo</button>
      <hr/>
      <section>
        <h2>Todos</h2>
        <Task task='Learn React' />
        <Task task='Be Awesome!' />
      </section>
    </main>
    </> 
  )
}

export default App
