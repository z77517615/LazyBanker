//style
import './login.css'

//react
import React , {useState} from "react";
import {useLogin} from '../../Hooks/useLogin'

const login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const { error , login , isPending} = useLogin()

    const handleSubmit= (e) =>{
        e.preventDefault()
        login(email,password)
    }

    return ( 
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input
                    required
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    required
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {!isPending && <button className="btn">Login</button>}
            {isPending && <button className="btn" disabled>loading...</button>}
            {error && <p className="error">{error}</p>}
         </form>
    );
}
 
export default login;