import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName,setUserName] = useState('');
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({userName, password})
        
    }
  return (
    <div className=''>
        <h2>Login</h2>
        <input type="text" 
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='username' />
        <br /> <br />
        <input type="password"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
         />

          <br /> <br />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login