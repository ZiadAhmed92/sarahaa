import React from "react"

const Register = () => {
  return (
    <div className="mt-5 message-area">
      <div className="icon-register">
        <i className="fa-regular fa-pen-to-square"></i>

      </div>
      <h2 className="text-info text-reg">Register</h2>
      <form className="register py-5">
        
          <input type="text" placeholder="Enter Your Name" className="input-name" name="Name" />
          <input type="text" placeholder="Enter Your Name" className="input-name" name="Name" />
          <input type="text" placeholder="Enter Your Name" className="input-name" name="Name" />
          <div className="mt-1">
            <button className=" btn-register mt-1"> Register </button>
            <button className=" btn-register mt-3"> I Have An Account </button>
          </div>

       
      </form>
    </div>
  )
}

export default Register