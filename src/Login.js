
import React,{ useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'
import {auth} from './firebase'
import { useStateValue } from './StateProvider'

function Login() {
    const histry = useHistory ();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then ( ( auth ) => {
            histry.push ( './' );
        })
        .catch( (e) => alert(e.messege) );
    }

    const  register = event => {
        console.log( email );
        event.preventDefault();
        auth.createUserWithEmailAndPassword (email, password)
        .then ( (auth) => {
            console.log ("ok");
            histry.push ( '/' );
        } )
        .catch ( (e)=> {
            console.log("error");
            alert(e.messege);
        });
    }

    return (
        <div className = "login">
            <Link to = "./">
                <img
                    className = "login__logo"
                    src = "https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
                    alt = ""
                />
            </Link>

            <div className = "login__container">
                <h1>Sing in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value = {email} onChange = { event => setEmail (event.target.value) } type = "eamil"/>
                    <h5>Password</h5>
                    <input value = {password} onChange = { event => setPassword ( event.target.value ) } type = "password" />
                    <button onClick = {login} type = "submit" className = "login__singinButton">Submit</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick = {register} className = "login__registerButton" >Create your Amazon account</button>
            </div>
            
        </div>
    )
}

export default Login
