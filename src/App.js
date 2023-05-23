import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"
import '../src/index.css';

function App() {
  const [ShowAddTask, setShowAddTask] = useState(true)
  const [vars, tastStat] = useState([
    {text:'happy', id:1, day:"one", reminder:true},
    {text:'welcome', id:2, day:"one", reminder:true},
    {text:'playing', id:3, day:"one", reminder:true}
    ])
  const addtask = (task)=>{
    const id = Math.ceil(Math.random()*10000)
    const newTask = {id, ...task}
    tastStat([...vars, newTask])
  }

  const deleteTask = (id) =>{
    tastStat(vars.filter(ee => ee.id != id))
  }
  const toggleReminder = (id, classNamee) =>{
    tastStat(vars.map(ee => ee.id == id ? {...ee, reminder: !ee.reminder} : ee))
  }
  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!ShowAddTask)} ll={ShowAddTask} />
      {ShowAddTask && <AddTask addtask={addtask}/>}
      <Tasks vasrs={vars} ondelete={deleteTask} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
