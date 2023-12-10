import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";




export let CountContext = createContext(0);
export default function CountContextProvider(props){

  
  const [res, setRes] = useState({})
  const[userData , setUserdata] = useState(null)
  const[local ,setLocal]= useState("")
  function dataUser(){
    let token = localStorage.getItem('token');
    setLocal(token)
    let userData = jwtDecode(token);
    setUserdata(userData)

  }

    return <CountContext.Provider value={{res,setRes,dataUser,userData,local}}>
        {props.children}
    </CountContext.Provider>
}