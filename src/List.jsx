import { useState } from 'react';
import './List.css';
import { KeyboardArrowDown, KeyboardArrowUp, Remove, Star, StarBorder } from '@mui/icons-material';

const List = () => {
    
    const [tasks, setTasks] = useState(["Sample Task","Sample Task","Sample Task"]);
    const [currTask, setCurrTask] = useState("");

    const addTask = () => {
        if(currTask){
            setTasks( l => [...l, currTask]);
        }
        else{
            alert("Task cannot be empty");
        }
        setCurrTask(t => "");
    };

    const removeTask = (value,idx) =>{
        setTasks(tasks.filter( (task,index) => index != idx));
    }

    const handleInput = (event) => {
        setCurrTask(event.target.value);
    };

    const [isImp, setIsImp] = useState();

    const handleStar = () => {
        setIsImp(i => !i);
    };

    return(
        <>
           <div className="List-header">
            <p>MY List</p>
            </div>

           <div className="List-items">
              <div className='Search-bar'>
                  <input className='task-input' type="text" placeholder='Enter a task' value={currTask} onChange={handleInput} />
                  <button className='add-button' type='button' onClick={addTask}>Add</button>
              </div>
              <div className='Tasks'>
                   {tasks.map(
                       (value,idx) => <div key={idx} className='Task'>
                                           <div className='Values'>
                                               <Remove className='Value-Icon' onClick={() => removeTask(value, idx)}/>
                                               <span>{value}</span>
                                           </div>
                                           <div className='Icons'>
                                               <KeyboardArrowUp className='Icon'/>
                                               <KeyboardArrowDown className='Icon'/>
                                               {isImp? <Star className='Icon' onClick={handleStar}/> : <StarBorder className='Icon' onClick={handleStar}/>}
                                           </div>
                                       </div>
                   )}
              </div>
            </div>
        </>
    );
};

export default List;