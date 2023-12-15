import React, { useContext, useEffect, useState } from 'react'
import imgProfile from "../image/profile.jpg"
import { CountContext } from '@/Context/Store'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/router'
const Profile = () => {
    let router = useRouter()
    let { userData, res, dataUser } = useContext(CountContext)
    const [type, setType] = useState("password")
    const [password, setPassword] = useState("")
   
    useEffect(() => {
        dataUser();
    }, [])
    async function changePassword() {
        try {
            let { data } = await axios.put("https://saraha874.onrender.com/users/changePasswordOfUser", { password }, {
                headers: {
                    'token': `${localStorage.getItem("token")}`,
                }
            });

            if (data.message == "success") {
                router.push('/login');
            }


        } catch (err) {

            console.log(err)
        }
    }

    function submitPassword(e) {
        e.preventDefault();
        changePassword()
    }
    return (
        <div className="container ">
            <div className="row align-items-center">
                <div className="col-md-6">
                    {userData || res?.token ? <Image src={imgProfile} width={200} height={400} alt='img' className='py-5 rounded-circle w-75 ' /> : ''}

                </div>
                <div className="col-md-6">

                    {userData || res?.token ? <>  <h3 className='py-1'>Email : {userData.Gmail} </h3>
                        <h3 className='py-1'>Name : {userData.name}</h3>
                        <h3 className='py-1'>Change Password :</h3>
                        <form onSubmit={submitPassword}>
                            <div className='position-relative'>
                                <input type={`${type}`} placeholder='New Password' className='w-100 newPassword' onChange={(e) => setPassword(e.target.value)} />
                                {type == "password" ? <i onClick={() => setType("text")} className="eya fa-solid fa-eye"></i>
                                    : <i onClick={() => setType("password")} className="eya fa-solid fa-eye-slash"></i>}
                            </div>

                            <button type='submit' className='btn-password'>Change</button>
                        </form>

                    </> : ''
                    }

                </div>
                {/* <div className="col-md-12">
          <h1 className='text-danger text-center'>Design By Ziad</h1>
        </div>  */}
            </div>
        </div>

    )
}

export default Profile