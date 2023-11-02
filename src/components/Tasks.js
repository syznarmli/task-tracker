import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle }) => {
    // setTasks([...tasks, {}}])  // spread existing, then add new
  return (
    <>
        {/* this is called the list when we use the .map */}
        {tasks.map((task) => (
            <Task key={task.id}  task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </>
  )
}

export default Tasks