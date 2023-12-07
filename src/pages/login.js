
const Login = () => {
  return (
    <div className="mt-5 message-area">
    <div className="icon-register">
    <i className="fa-solid fa-user-secret"></i>
      

    </div>
    <h2 className="text-info text-reg">Login</h2>
    <form className="register py-5">
      
        
        <input type="email" placeholder="Enter Your Email" className="input-name" name="Name" />
        <input type="password" placeholder="Enter Your Password" className="input-name" name="Name" />
        <div className="mt-1">
          <button className=" btn-register mt-1"> Login </button>
          <button className=" btn-register mt-3"> I Don't Have An Account </button>

        </div>
        <h6 className="text-center"><a href="#" className="login-forgot">I Forgot My Password ?</a> </h6>

     
    </form>
  </div>
  )
}

export default Login