import Image from "next/image"
import img1 from "../image/img1.jpg"
const Messages = () => {
    return (
        <div className="message-main">
            <div className="m-auto bg-info">
                <Image src={img1} width={100} height={100} alt="img" />
            </div>
            <div className="message-area">
                <h2>Ziad ahmed abeed</h2>
                <textarea id="w3review" placeholder="You Cannot Send A Sarahah To Yourself , Share Your Profile With Your Frindes. " name="w3review" rows="8" >
                    
                </textarea>
                <button className="btn-send"><i className="text-info fa-regular fa-paper-plane"></i> Send</button>
            </div>
           
            <button className="btn-send"><i className=" text-info fa-solid fa-share-nodes"></i> Share Profile </button>

        </div>
    )
}

export default Messages