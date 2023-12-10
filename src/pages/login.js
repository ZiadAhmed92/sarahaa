import { CountContext } from "../Context/Store"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
const Login = () => {
  let {res,setRes,dataUser} = useContext(CountContext)
  let router = useRouter()
  const [error, setError] = useState("")
 
  const [errorList, setErrorList] = useState([])
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  function getUserData(e) {
    let myuser = { ...user };
    myuser[e.target.name] = e.target.value;
    setUser(myuser)
    console.log(user)

  }
  const Joi = require('joi');
  function validateRegisterForm() {
    let schema = Joi.object({

      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

    })
    return schema.validate(user, { abortEarly: false })
  }
  async function signIn() {
    try {
      const { data } = await axios.post("https://saraha874.onrender.com/users/signin", user);
      console.log(data)
      setRes(data)
      if(res?.message === 'login'){
        router.push('/message');
        console.log("tmm")
        localStorage.setItem("token" , res.token)
        dataUser()
      
      }
    } catch (err) {
      // setError(err)
      console.log(err)
    }

  }

  function submitRegister(e) {

    e.preventDefault();
    let validation = validateRegisterForm();

    if (validation.error) {
      setErrorList(validation.error.details);
    }
    else {
      signIn();
    
    }

  }
  return (
    <div className=" message-area">
      <div className="icon-register">
        <i className="fa-solid fa-user-secret"></i>


      </div>
      <h2 className="text-info text-reg">Login</h2>
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

          <input type="email" placeholder="Enter Your Email" className="input-name" name="email" onChange={getUserData} />
          <input type="password" placeholder="Enter Your Password" className="input-name" name="password" onChange={getUserData} />
         
            <input type="submit" value="Login" className=" btn-register mt-2"/>
            {/* <button className=" btn-register mt-1" type="submit" > Login </button> */}
         
        </form>
        <Link href='/register'> <button className=" btn-register mt-3"> I Don't Have An Account </button></Link>
        <h6 className="text-center"><a href="#" className="login-forgot">I Forgot My Password ?</a> </h6>
      </div>
    </div>
  )
}

export default Login