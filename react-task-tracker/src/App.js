import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
      
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2.30pm',
        reminder: false,
    },

    {
        id: 2,
        text: 'Grocery Shopping',
        day: 'Mar 21st at 4.00pm',
        reminder: false,
    }
])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
 
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd= {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />: 'No task to show'}
    </div>
  );
}

export default App;
