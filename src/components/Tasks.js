import Task from './Task';

const Tasks = ({vasrs, ondelete, toggleReminder}) => {
  return (
    <>
      {vasrs.map(item => (
      <Task
        key={item.id}
        item={item}
        ondelete={ondelete}
        toggleReminder={toggleReminder}
      />
      ))}  
    </>
  )
}

export default Tasks
