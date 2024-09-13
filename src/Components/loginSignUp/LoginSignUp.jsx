import './LoginSignUp.css'
import user_icon from '../../Assets/person.png'
import password_icon from '../../Assets/password.png'
import email_icon from '../../Assets/email.png'
import { useState } from "react"
import {useForm} from 'react-hook-form'
//import { useNavigate } from "react-router-dom"
function LoginSignUp() {
   // const navigate=useNavigate();
    let [action,setAction]=useState('Sign Up')
    let {register,handleSubmit,unregister, formState: { errors }}=useForm()
    async function handleSignUp(data){
console.log("Sign Up data :",data)
    }
    async function handleLogin(data){
      unregister("username")
      console.log("Login data :",data)
   //   navigate('/Rootlayout')

          }
  return (
    <div className="row"> 
   <div className="container col-12 col-sm-8 col-md-5 ">
     <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
     </div>
     <div className="inputs">
       {
        action==='Sign Up'&&<div className="bo">
          <div className="input">
        <img src={user_icon} alt="no" />
        <input type="text" placeholder="username" name="username" id="username" {...register("username",{required:true})} />
        </div>
        {errors.username && <p className="text-danger">Username is required</p>}
        </div>
       }
        <div className="input">  
        <img src={email_icon} alt="" />
        <input type="email" placeholder="e-mail" name="mail" id="mail" {...register("mail",{required:true})} />
        </div>
        {errors.mail && <p className="text-danger">email is required</p>}
        <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder="password" name="pass" id="pass" {...register("pass",{required:true})} />
                </div>
                {errors.pass && <p className="text-danger">password is required</p>}
       {
        action==='Login'&&<div className="forgot-password">forgot password ? <span>Click here !</span></div>
       }
     </div>
     <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={action === 'Sign Up' ? handleSubmit(handleSignUp) : () => setAction('Sign Up')}>Sign Up</div>
        <div className={action==='Sign Up'?'submit gray':'submit'} onClick={action==='Login'?handleSubmit(handleLogin):()=>setAction('Login')}>Login</div>
     </div>
      </div>
       </div>
  )
}

export default LoginSignUp