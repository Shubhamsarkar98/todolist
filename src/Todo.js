import React, { useState } from "react";
import "./App.css";
import moon from "./images/icon-moon.svg";
import sun from './images/icon-sun.svg'
import image1 from "./images/bg-desktop-light.jpg";
import image2 from "./images/bg-desktop-dark.jpg"
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dark, setdark] = useState(false)
  const [arr, setarr] = useState([])


  const darkmode=()=>{
    setdark(!dark)
  }
  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  const addTask = () => {

    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const checkall=()=>{
   let check=document.getElementsByName('alltask')
   
   let checklen=check.length
   for(var x=0;x<checklen;x++){
    check[x].checked=true;
   }
  }
  const darkall=()=>{
    let check=document.getElementsByName('darkall')
    let checkleen=check.length
    for(var x=0;x<checkleen;x++){
      check[x].checked=true
    }

  }
  return (
    <>
    {
      dark? <div style={{backgroundColor:'black',height:'1000px'}}>
      <header>
     
       {
        dark?<img src={image1} width="100%"  className="mobilemoon"/>:<img src={image2} width="100%" className="mobilesun" />
       } 
        
      </header>
   <div>
 
   </div>
   
      <div>
      <div>
        <h1 className="todoname">TODO</h1>
     {
      dark? <img src={sun} alt="moon" className="todologo" onClick={darkmode}/>: <img src={moon} alt="moon" className="todologo" onClick={darkmode}/>
     }  
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      {
          dark?<input
          className="input"
          placeholder="Enter you Task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={onKeyDownHandler}
          type="text"
          style={{backgroundColor:'black', color:'white'}}
        />:<input
          className="input"
          placeholder="Enter you Task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={onKeyDownHandler}
          type="text"
        />
        }
        
        {
          dark?  <ul className="todolist"  style={{backgroundColor:'black',color:'white'}}>
          {tasks.map((task, index) => (
            <li key={index} style={{listStyle:'none'}}>
              <input
                type="checkbox"
                checked={task.completed}
                name="alltask"
                onChange={() => completeTask(index)}
              />
             
              
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} >
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)}  className="del">X</button>
              
            </li>
          ))}
        </ul>:  <ul className="todolist" >
        {tasks.map((task, index) => (
          <li key={index} style={{listStyle:'none'}}>
            <input
              type="checkbox"
              checked={task.completed}
               name="alltask"
              onChange={() => completeTask(index)}
            />
           
            
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}  className="del">X</button>
            
          </li>
        ))}
      </ul>
        }
      

      </div>
      {
      dark? <div className="main" style={{display:'flex', justifyContent:'space-between',backgroundColor:'black',border:'2px solid white',width:'400px', color:'white'}}  >
      <span className="all" onClick={checkall}>All {tasks.length} left item </span><span>Active</span><span>Completed</span><span className="clear">Clear All</span>
     </div>: null
    }
      </div>
    </div>: <div>
      <header>
     
       {
        dark?<img src={image1} width="100%"  className="mobilemoon"/>:<img src={image2} width="100%" className="mobilesun" />
       } 
        
      </header>
   <div>
 
   </div>
   
      <div>
      <div>
        <h1 className="todoname">TODO</h1>
     {
      dark? <img src={sun} alt="moon" className="todologo" onClick={darkmode}/>: <img src={moon} alt="moon" className="todologo" onClick={darkmode}/>
     }  
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          dark?<input
          className="input"
          placeholder="Enter you Task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={onKeyDownHandler}
          type="text"
          style={{backgroundColor:'black'}}
        />:<input
          className="input"
          placeholder="Enter you Task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={onKeyDownHandler}
          type="text"
        />
        }
        
        <ul className="todolist" >
        {tasks.map((task, index) => (
          <li key={index} style={{listStyle:'none'}}>
            <input
              type="checkbox"
              checked={task.completed}
              name="alltask"
              onChange={() => completeTask(index)}
            />
           
            
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}  className="del">X</button>
            
          </li>
        ))}
      </ul>

      </div>
      </div>
    </div>
    }
    {
      dark? null: <div style={{display:'flex', justifyContent:'space-between',backgroundColor:'white',border:'2px solid black',width:'400px'}} className="demon">
    <span className="all"  onClick={checkall}>All {tasks.length} left item</span><span>Active</span><span>Completed</span><span className="clear">Clear All</span>
   </div>
    }
  
    </>
    
  );
};

export default Todo;
