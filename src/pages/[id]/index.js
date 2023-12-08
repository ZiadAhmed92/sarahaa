import Image from "next/image"
import img1 from "../../image/img1.jpg"
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Messages = () => {
    let router = useRouter();
    let { id } = router.query;
    

    const [message, setMessage] = useState ({message:""});
    
    function getUserData(e) {
        let myuser = { ...message };
        myuser[e.target.name] = e.target.value;
        setMessage(myuser)
        console.log(message)
    
      }

    async function sendMessage() {
        try {
          const { data } = await axios.post(`https://saraha874.onrender.com/message/${id}`, message);
          
          console.log(data)
        } catch (err) {
          // setError(err)
          console.log(err)
        }
    
      }
      function submitMessage(e){
        e.preventDefault();
        // if(message){
                sendMessage()
        // window.prompt("The message was sent successfully")
        // }else{
        //     window.prompt("Please write a message")
        // }
    
      }
    return (
        <div className="message-main">
            <div className="m-auto bg-info">
                <Image src={img1} width={100} height={100} alt="img" />
            </div>
            <form onSubmit={submitMessage} className="message-area">
                <h2>{router.query.name}</h2>
                <textarea id="w3review" placeholder="You Cannot Send A Sarahah To Yourself , Share Your Profile With Your Frindes. " name="message" rows="8" onChange={getUserData} >
                    
                </textarea>
                {/* <input type="text" name="message"  onChange={getUserData}/> */}
                <button type="submit" className="btn-send"><i className="text-info fa-regular fa-paper-plane"></i> Send</button>
            </form>
           
            {/* <button className="btn-send"><i className=" text-info fa-solid fa-share-nodes"></i> Share Profile </button> */}

        </div>
    )
}

export default Messages