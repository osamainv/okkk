import { FaTimes } from 'react-icons/fa';

const Task = ({item, ondelete,toggleReminder}) => {
  return (
    <div className={`tete ${item.reminder ? 'greene' : ""}`} onDoubleClick={()=> toggleReminder(item.id, `class${item.id}`)}>
      <h3>{item.text} <FaTimes /> </h3>
      <p>{item.day}</p>
    </div>
  )
}

export default Task;
