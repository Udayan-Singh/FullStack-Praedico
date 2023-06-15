import { useState } from "react";
import axios from 'axios';
// import { json } from "react-router-dom";


// http://localhost:5000/auth/login
const Login = () => {


    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleInput = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:5000/auth/login', {email: user.email, password: user.password})
        .then(response => console.log(response)) 
        .catch(err => console.log(err))

    }

  return (    
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" >Email</label>
            <input type="email" name="email" onChange={handleInput}/>

            <label htmlFor="password">
                Password
             </label>
            <input type="password" name="password" onChange={handleInput}/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login