// import Few from './Few';

import { useState } from "react"

const AddTask = ({addtask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            return
        }
        addtask({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    const rec = (wordarr) => {
      
      if (wordarr.length == 1){
        return wordarr;
      }
      if (wordarr[0] == wordarr[1]){
        return rec(wordarr.slice(1));
      }
      
      return [wordarr[0]].concat(rec(wordarr.slice(1)));
      
    }

    const vvv = (text) => {
      text = text.replaceAll(/burhan/g, 'criminal burhan')
      let wordarr = text.split(" ");
      let word = rec(wordarr);
      setText(word.join(" "));
    }
    
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={e => vvv(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" value={day} onChange={e => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-controlboxcheck">
        <label>Set Reminder</label>
        <input type="checkbox" onChange={e => setReminder(e.currentTarget.checked)} checked={reminder}/>
      </div>
      <input className="btne" type="submit" value='Save Task' />
    </form>
  )
}

export default AddTask
