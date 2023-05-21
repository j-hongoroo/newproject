import axios from "../../axios";
import { useState ,useEffect} from "react";
import { useParams } from 'react-router-dom';
import "./style.css"
import {HiOutlinePlus} from 'react-icons/hi'
import {AiTwotoneDelete} from 'react-icons/ai'

function Todos() {
    const { id } = useParams();
    const [todo,setTodo] = useState('');
    const [todos,setTodos ] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const response = await axios.get("/todo");
            const data =response.data.data
            const userTodos = data.filter((el)=>{
                return el.taskId === id
            })
            setTodos([...userTodos])
        }   
        getData()
   },)

    const addTodo = async()=>{
        try{
            const response = await axios.post("/todo",{
                taskId: id,
                todo:todo
            });
            const data =response.data.data.todo
        setTodos([...todos, data])
            console.log(todo)
        }catch(err){
            console.log(err)
        }
    }

    const DeleteTodo = (_id)=>{
        axios.delete(`/todo/${_id}`)
        console.log({_id})
    }

    return (  
        <div className="main">
                <h2>Todo lists</h2>

            <div className="todos">
                <input onChange={(e)=>{setTodo(e.target.value)}} placeholder="new todo"/>
                <button className="btn" onClick={addTodo}><HiOutlinePlus/></button>
                {todos.map(el=>(
                    <div className="todo">  
                        <p>{el.todo}</p>
                        <AiTwotoneDelete className="icon" onClick={()=>DeleteTodo(el._id)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todos;