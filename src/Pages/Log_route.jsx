import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Log_route = ({children}) => {
    const [user,setuser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate("/")
            return
        }
    })
  return (
    <>
    {children}
    </>
  )
}

export default Log_route