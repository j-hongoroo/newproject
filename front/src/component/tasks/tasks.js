import { useEffect, useState } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import './style.css'
import {HiOutlinePlus} from 'react-icons/hi'
import {AiTwotoneDelete} from 'react-icons/ai'


// import { useParams } from "react-router-dom";


function Tasks({userId}) {
    // const params = useParams()
    // console.log(params)
   const [task,setTask] = useState('');
   const [tasks,setTasks ] = useState([])
   useEffect(()=>{
        const getData=async()=>{
            const response = await axios.get('/tasks');
            const data =response.data.data
            const usertasks = data.filter((el)=>{
                return el.createUserId === userId
            })
            setTasks([...usertasks])
        }   
        getData()
   }) 


    const addTask = async()=>{
        try{
            const response = await axios.post("/tasks",{
                task
            });
            const data =response.data.data
            console.log(response)
        setTasks([...tasks, data])

        }catch(err){
            console.log(err)
        }
    }
    const handleDelete = (_id)=>{
        console.log(_id)
        axios.delete(`/tasks/${_id}`)
    }
    return (  
        <div className="main">
                <h2>Task manager</h2>

            <div className="tasks">
                <input type="text" onChange={(e)=>{setTask(e.target.value)}}/>
                <button className="btn" onClick={addTask}><HiOutlinePlus/></button>
                <div>
                    {tasks.map(el=>(
                        <div className="task">
                            <Link to={`/tasks/${el._id}`}><p>{el.task}</p></Link>
                            <AiTwotoneDelete className="icon" onClick={()=>handleDelete(el._id)}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tasks
