import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from "react"
import '../src/index.css';

function App() {
  const [ShowAddTask, setShowAddTask] = useState(true)
  const [vars, tastStat] = useState([])

  useEffect(() => {
    const GetTasks = async () => {
      const res = await fetchTasks()
      tastStat(res)
    }
    GetTasks()
  },[])
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const addtask = async (task)=>{
    const addone = await fetch('http://localhost:5000/tasks',{
      method:"POST",
      headers: {"Content-type": "application/json",},
      body: JSON.stringify(task),
    })
    const dataa = await addone.json()
    tastStat([...vars, dataa])
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
