import React from 'react'
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { CountContext } from "../Context/Store"
import axios from "axios"

import Link from "next/link"
import img1 from "../image/img1.jpg"
const Message = () => {
    let [url, setUrl] = useState("");
    let [Messages, setMessages] = useState([]);
    let {res:{token},userData} = useContext(CountContext)
   console.log(userData)
   
    async function getMessages() {
      try {
        let { data } = await axios.get("https://saraha874.onrender.com/message",{ headers:{
          'token': `${token}`,
  
        }});
        setMessages(data.messages)
        console.log(data.messages )
     
      } catch (err) {
        console.log(err)
      }
  
    }
    useEffect(() => {
  
      getMessages()
  
    }, [])
  
     function getUrl(){
      // https://sarahaa.vercel.app/
      setUrl(`https://sarahaa.vercel.app/${userData?.userId}`)
      console.log(url)
     }
  return (

    <div className="message-main">
    <div className="m-auto bg-info">
      <Image src={img1} width={100} height={100} alt="img" />
    </div>
    <div className="message-area">
      <h2>{userData?.name}</h2>
    </div>
    <button className="mb-2 btn-send" onClick={getUrl} ><i className=" text-info fa-solid fa-share-nodes"></i> Share Profile </button>
    {url?<Link   href={{
              pathname: `${url}`,
              query:{name:`${userData?.name}`} ,
            }} className='  p-2 alert alert-primary text-danger'>{url}</Link>:""}
    {Messages.map(({message,i})=>{ return<p key={i} className='w-50  p-2 alert alert-primary text-danger'>{message}</p>})}
  </div>
  )
}

export default Message