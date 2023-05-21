import { BrowserRouter,Routes,Route } from 'react-router-dom';
import jwt from "jwt-decode"
import Header from './component/header/header';
import Register from './component/register/register';
import Login from './component/login/login';
import Tasks from './component/tasks/tasks';
import './App.css';
import { useState } from 'react';
import Todos from './component/todo/todos';

function App() {
const [token,setToken] = useState('');
const handleToken = (arg)=>{
  const user = jwt(arg)
  setToken(user.id)
}
console.log(token)

  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/register' exact element={<Register/>} />
        <Route path='/Login' exact element={<Login Token={handleToken}/>}/>
        <Route path='Tasks'  exact element={<Tasks userId={token}/>}/>
        <Route path='/Tasks/:id' exact element={<Todos/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
