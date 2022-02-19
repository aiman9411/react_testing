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
        reminder: false,
    }
])
 
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
