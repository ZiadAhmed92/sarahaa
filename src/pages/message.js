import React from 'react'
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { CountContext } from "../Context/Store"
import axios from "axios"
import Link from "next/link"
import img1 from "../image/img1.jpg"
import clipboardCopy from 'clipboard-copy';

const Message = () => {
  let [date, setDate] = useState([]);
  let [url, setUrl] = useState("");
  let [id, setID] = useState(0);
  let [Messages, setMessages] = useState([]);
  let { res, userData, dataUser } = useContext(CountContext)


  const copyToClipboard = (text) => {
    clipboardCopy(text)
      .then(() => alert('تم نسخ النص بنجاح!'))
      .catch((err) => console.error('فشلت عملية النسخ: ', err));
  };


  async function getMessages() {
    try {
      let { data } = await axios.get("https://saraha874.onrender.com/message", {
        headers: {
          'token': `${localStorage.getItem("token")}`,
        }
      });
      // console.log(data.messages[1].createdAt)
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
        {url ? <div className='w-100 d-flex justify-content-center align-items-center '><Link href={{
          pathname: `${url}`,
          query: { name: `${userData?.name}` },
        }} className='w-75 url p-2 alert alert-primary text-danger'>{url}</Link><i onClick={() => copyToClipboard(url)} className="fa-solid fs-3 mb-3 ms-1 fa-copy"></i></div> : ""}
        {Messages.map(({ message, createdAt, _id }, i) =>
          <div className='parent-message ' key={i}>
            <div className='message-date px-2 date'>
              <p className=''>Date :{createdAt.slice(0,-14)}</p>
              <p className=''>Time :{createdAt.slice(11,-8)}</p>
            </div>
            <div className='w-100 d-flex justify-content-center align-items-center '>
              <p className='message url p-2 alert alert-primary text-dark'>{message}</p>
              <i className="fa-solid fs-3 mb-3 ms-1 fa-trash" onClick={() => { deleteMessages(_id); setID(1 + id) }}></i>
            </div>
          </div>)}
      </div>
    </>
  )
}

export default Message