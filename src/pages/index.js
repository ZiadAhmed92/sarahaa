import Head from "next/head"
import img1 from "../image/img1.jpg"
import { Inter } from "next/font/google"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { CountContext } from "../Context/Store"
import axios from "axios"
import { headers } from "../../next.config"
import Link from "next/link"


const inter = Inter({ subsets: ["latin"] })

export default function Home() {
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
    
    setUrl(`https://sarahaa.vercel.app/${userData?.userId}`)
    console.log(url)
   }
  return (
    <>
      <Head>
        <title>Saraha</title>
        <meta name="description" content="Send a secret message" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* <Login/> */}
      <div className="message-main">
        <div className="m-auto bg-info">
          <Image src={img1} width={100} height={100} alt="img" />
        </div>
        <div className="message-area">
          <h2>{userData?.name}</h2>
        </div>
        <button className="mb-2 btn-send"onClick={getUrl} ><i className=" text-info fa-solid fa-share-nodes"></i> Share Profile </button>
        {url?<Link   href={{
                  pathname: `${url}`,
                  query:{name:`${userData?.name}`} ,
                }} className='  p-2 alert alert-primary text-danger'>{url}</Link>:""}
        {Messages.map(({message})=>{ return<p  className='w-50  p-2 alert alert-primary text-danger'>{message}</p>})}
      </div>


    </>
  )
}
