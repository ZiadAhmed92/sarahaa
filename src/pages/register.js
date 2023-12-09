import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"

const Register = () => {
  let router = useRouter()
  const [error, setError] = useState("")
  const [errorList, setErrorList] = useState([])
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  function getUserData(e) {
    let myuser = { ...user };
    myuser[e.target.name] = e.target.value;
    setUser(myuser)
    // console.log(user)

  }
  async function signUp() {
    try {
      const { data } = await axios.post("https://saraha874.onrender.com/users/signup", user);
      console.log(data)
    } catch (err) {
      setError(err.response.data.message)
    }

  }
  const Joi = require('joi');
  function validateRegisterForm() {
    let schema = Joi.object({
      name: Joi.string().min(3).max(10).required(),
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

    })
    return schema.validate(user, { abortEarly: false })
  }

  function submitRegister(e) {

    e.preventDefault();
    let validation = validateRegisterForm();

    if (validation.error) {
      setErrorList(validation.error.details);


    }
    else {
      signUp();
      router.push('/login');
     
    }

  }

  return (
    <div className=" message-area">
      <div className="icon-register">
        <i className="fa-regular fa-pen-to-square"></i>

      </div>
      <h2 className="text-info text-reg">Register</h2>

      <div className="register py-5">
        <form onSubmit={submitRegister} className="form">
          {  
             error ?  <p className='w-100 p-2 alert alert-primary text-danger'>{error} </p>:""
            }
          {errorList.map((error, i) => {
            if (error.context.label === 'password') {
              return <p key={i} className='w-100 p-2 alert alert-primary text-danger'>The password is weak and must not be less than five numbers </p>
            } else {
              return <p key={i} className='w-100 p2 alert alert-primary text-danger'>{error.message} </p>

            }
          })}
          <input type="text" placeholder="Enter Your Name" className="input-name" name="name" onChange={getUserData} />
          <input type="email" placeholder="Enter Your Email" className="input-name" name="email" onChange={getUserData} />
          <input type="password" placeholder="Enter Your password" className="input-name" name="password" onChange={getUserData} />
          <div className="mt-1">
            <button className=" btn-register mt-1" > Register </button>

          </div>


        </form>
        <Link href="login"> <button className=" btn-register mt-3"> I Have An Account </button></Link>
      </div>
    </div>
  )
}

export default Register