import { CountContext } from "../Context/Store"
import Link from "next/link"
import { useContext } from "react"
const NavBar = () => {
    let { res, setRes, userData, local, setLocal } = useContext(CountContext)

    return (
        <div className="bg-info position-relative navBar d-flex justify-content-between align-items-center px-5 py-2">

            {res?.token || local ? <Link href="/message" className="link">
                <div className="icon-main">
                    <i className="fa-solid fa-user-secret"></i>
                </div>
            </Link> :""}
            <ul className="ul-nav d-flex justify-content-center align-items-center">
                {res?.token || local ? <Link href="login" className="link" onClick={() => { localStorage.removeItem("token"); setLocal(""); setRes("") }}>  <li className="logout"><i className="fa-solid fa-right-from-bracket"></i></li></Link>
                    : <h1 className="saraha">Saraha</h1>}

                {/* <Link href="messages" className="link"><li>Messages</li></Link> */}
            </ul>
        </div>
    )
}

export default NavBar