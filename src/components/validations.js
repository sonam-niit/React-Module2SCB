import React, { useState } from 'react';

function FormValidation() {

    const [formData,setFormData]=useState({username:'',email:''})

    const [errors,setErrors]= useState({})

    const handleChange=(e)=>{
        const {name,value}= e.target;
        let errorMessage='';

        if(name==='username'){
            if(value.length<5){
                errorMessage="UserName must be atleast 5 characters long "
            }
        }
        if(name==='email'){
            const pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            if(!pattern.test(value)){
                errorMessage="Email Id is Invalid "
            }
        }
        setFormData({...formData,[name]:value});
        setErrors({...errors,[name]:errorMessage});
    }
    return ( <div>
        <h1>Form Validation</h1>
        <div className='form-group'>
            <label>UserName</label>
            <input type='text' placeholder='Enter User Name' name='username'
            value={formData.username}
            onChange={handleChange} />

        {errors.username &&
            <div className='invalid-feedback d-block'>{errors.username}</div>}
        </div>
        <div className='form-group'>
            <label>Email</label>
            <input type='text' placeholder='john.doe@gmail.com' name='email'
            value={formData.email}
            onChange={handleChange} />

        {errors.email &&
            <div className='invalid-feedback d-block'>{errors.email}</div>}
        </div>
    </div> );
}

export default FormValidation;