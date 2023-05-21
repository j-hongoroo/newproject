import axios from "../../axios";
import { useState } from "react";
import "./style.css"

function Register() {
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handle = async()=>{
        try{
            const data = await axios.post("/user",{
                userName,
                email,
                password
            })
            console.log(data)
        
        }catch(err){
            console.log(err)
        }
    }
       
    return ( 
        <div className="regMain">
            <div className="register">
                <h2>Бүртгүүлэх</h2>
                <input type=" text" placeholder="username" onChange={(e)=>{setUserName(e.target.value)}}/>
                <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={handle}>register</button>
            </div>
        </div>
     );
}

export default Register;