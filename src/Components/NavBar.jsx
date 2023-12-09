import { CountContext } from "../Context/Store"
import Link from "next/link"
import { useContext } from "react"
const NavBar = () => {
    let { res,setRes, userData } = useContext(CountContext)
    return (
        <div className="bg-info navBar d-flex justify-content-between align-items-center px-5 py-2">

{res?.token ?  <Link href="/message" className="link">
                <div className="icon-main">
                    <i className="fa-solid fa-user-secret"></i>
                </div>
            </Link>:<h6></h6>}
            <ul className="ul-nav d-flex justify-content-between align-items-center">
                {res?.token ? <Link href="login" className="link" onClick={()=> setRes("")}>  <li className="logout"><i className="fa-solid fa-right-from-bracket"></i></li></Link>
                    : <><Link href="login" className="link">  <li>Login</li></Link>
                        <Link href="register" className="link">  <li>Register</li></Link></>}

                {/* <Link href="messages" className="link"><li>Messages</li></Link> */}
            </ul>
        </div>
    )
}

export default NavBar