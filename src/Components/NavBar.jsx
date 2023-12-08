import Link from "next/link"
const NavBar = () => {
    return (
        <div className="bg-info navBar d-flex justify-content-between align-items-center px-5 py-2">

            <Link href="/" className="link">  
             <div className="icon-main">
                <i className="fa-solid fa-user-secret"></i>
            </div>
            </Link>
            <ul className="ul-nav d-flex justify-content-between align-items-center">
                <Link href="login" className="link">  <li>Login</li></Link>
                <Link href="register" className="link">  <li>Register</li></Link>
                <Link href="messages" className="link"><li>Messages</li></Link>
                <Link href="login" className="link">  <li className="logout"><i className="fa-solid fa-right-from-bracket"></i></li></Link>
            </ul>
        </div>
    )
}

export default NavBar