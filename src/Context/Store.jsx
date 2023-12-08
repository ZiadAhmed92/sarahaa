import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";




export let CountContext = createContext(0);
export default function CountContextProvider(props){

  
  const [res, setRes] = useState({})
  const[userData , setUserdata] = useState(null)
  function dataUser(){
    let token = localStorage.getItem('token');
    let userData = jwtDecode(token);
    setUserdata(userData)
console.log(userData)
  }

    return <CountContext.Provider value={{res,setRes,dataUser,userData}}>
        {props.children}
    </CountContext.Provider>
}