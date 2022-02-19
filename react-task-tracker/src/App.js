import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'

function App() {
      
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
        reminder: true,
    }
])

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
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />: 'No task to show'}
    </div>
  );
}

export default App;
