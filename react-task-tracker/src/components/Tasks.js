const tasks = [
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
]

const Tasks = () => {
    return (
        <>
          {tasks.map((task) => (
            <h3>{task.text}</h3>
        ))}  
        </>
    )
}

export default Tasks
