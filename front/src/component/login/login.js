import axios from "../../axios";
import { useState } from "react";
import "./style.css"
function Login(props) {
  
    const Token = props.Token
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handle = async()=>{
        try{
            const response = await axios.post("/user/login",{
                email,
                password
            })
            Token(response.data.token)
        
        }catch(err){
            console.log(err)
        }
    }
       
    return ( 
        <div className="logMain">
            <div className="login">
                <h2>Нэвтрэх</h2>
                <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={handle}>Login</button>
            </div>
        </div>
     );
}

export default Login;