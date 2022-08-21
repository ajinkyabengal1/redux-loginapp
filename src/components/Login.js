import React, { useState } from 'react'
import {login} from '../feature/UserSlice'
import { useDispatch } from 'react-redux';
import '../Login.css'


const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }));
    }

    return (
        <div className='login-page'>
            <form action="" className='login-form' onSubmit={(e)=>handleSubmit(e)}>
                <h1>Login Page </h1>
                <input
                    type="name"
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder='Enter Your E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='submit-btn'> Submit</button>
            </form>

        </div>
    )
}

export default Login
