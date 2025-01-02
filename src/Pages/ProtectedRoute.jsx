import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    console.log(user);
    
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate("/login")
            return
        }
    },[])


  return (
    <>
    
    {children}

    </>
  )
}

export default ProtectedRoute