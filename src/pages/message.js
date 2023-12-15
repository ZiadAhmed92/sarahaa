import React from 'react'
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { CountContext } from "../Context/Store"
import axios from "axios"
import Link from "next/link"
import img1 from "../image/img1.jpg"
const Message = () => {
  let [url, setUrl] = useState("");
  let [id, setID] = useState(0);
  let [Messages, setMessages] = useState([]);
  let { res, userData, dataUser } = useContext(CountContext)


  async function getMessages() {
    try {
      let { data } = await axios.get("https://saraha874.onrender.com/message", {
        headers: {
          'token': `${localStorage.getItem("token")}`,
        }
      });
      setMessages(data.messages)
      // console.log(data.messages._id)
    } catch (err) {
      console.log(err)
    }
  }
  async function deleteMessages(id) {
    try {
      let { data } = await axios.delete("https://saraha874.onrender.com/message", {
        headers: {
          'token': `${localStorage.getItem("token")}`,
        },
        data: {
          id: id
        }
      });
      
      console.log(data)
    } catch (err) {
    
      console.log(err)
    }
  }


  useEffect(() => {
    dataUser();
    getMessages()
  
  }, [id])
 

  function getUrl() {
    // https://sarahaa.vercel.app/
    setUrl(`https://sarahaa.vercel.app/${userData?.userId}`)

  }
  return (
    <>
      <div className="message-main">
        <div className="m-auto bg-info">
          <Image src={img1} width={100} height={100} alt="img" />
        </div>
        <div className="message-area">
          <h2>{userData?.name}</h2>
        </div>
        <button className="mb-2 btn-send" onClick={getUrl} ><i className=" text-info fa-solid fa-share-nodes"></i> Share Profile </button>
        {url ? <Link href={{
          pathname: `${url}`,
          query: { name: `${userData?.name}` },
        }} className='w-75 url p-2 alert alert-primary text-danger'>{url}</Link> : ""}
        {Messages.map(({message,_id}, i) => <div key={i} className=' w-100 d-flex justify-content-center align-items-center '><p  className='w-75 url p-2 alert alert-primary text-dark'>{message}</p><i className="fa-solid fs-3 mb-3 ms-1 fa-trash"onClick={()=>{deleteMessages(_id);setID(1+id)}}></i></div>)}
      </div>
    </>
  )
}

export default Message