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
  return (
    <>
    {
      dark? <div style={{backgroundColor:'black',height:'1000px'}}>
      <header>
     
       {
        dark?<img src={image1} width="100%" />:<img src={image2} width="100%" />
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
        <input
          className="input"
          placeholder="Enter you Task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={onKeyDownHandler}
          type="text"
        />
        <ul className="todolist" >
        {tasks.map((task, index) => (
          <li key={index} style={{listStyle:'none'}}>
            <input
              type="checkbox"
              checked={task.completed}
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
    </div>: <div>
      <header>
     
       {
        dark?<img src={image1} width="100%" />:<img src={image2} width="100%" />
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
        <input
          className="input"
          placeholder="Enter you Task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={onKeyDownHandler}
          type="text"
        />
        <ul className="todolist" >
        {tasks.map((task, index) => (
          <li key={index} style={{listStyle:'none'}}>
            <input
              type="checkbox"
              checked={task.completed}
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
   
    </>
    
  );
};

export default Todo;
