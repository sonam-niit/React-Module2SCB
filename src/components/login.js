import React, { useState } from "react";
import { toast } from "react-toastify";

function Login() {

    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');
    const [user,setUser]= useState({email:'',password:''})

    const validateForm=()=>{
        return user.email.length>0 && user.password.length>0;
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(user.email=='admin@admin.com' && user.password=='123456'){
            toast.success('Successfully Logged In..')
            //alert("Successfully Logged In..")
        }else{
            toast.error('Invalid Credentials.',{
                position:'top-left',
                autoClose:5000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true
            });
            //customize your Toast
            //alert('Wrong UserName or Password')
        }
    }
  return (
    <div>
      <h1>Login Form</h1>
      <form className="col-md-6 offset-3" onSubmit={handleSubmit}>
        <div className="form-group mt-3">
            <label for="email">Email</label>
            <input type="text" placeholder="john.doe@gmail.com" className="form-control"
            value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
        </div>
        <div className="form-group mt-3">
            <label for="passwrd">Password</label>
            <input type="password" placeholder="***********" className="form-control"
            value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
        </div>
        <button type="submit" className="btn btn-primary mt-3"
        disabled={!validateForm()}>Login</button>
      </form>
    </div>
  );
}

export default Login;
