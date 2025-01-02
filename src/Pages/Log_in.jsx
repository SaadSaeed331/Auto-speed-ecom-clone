import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Log_in = () => {

  const [logObj, setlogObj] = useState({})
  const [msg, setmsg] = useState("")
  var navigate = useNavigate()


  // useEffect(()=>{

  // },[msg])

  const checkValue = (e) => {
    setlogObj({ ...logObj, [e.target.id]: e.target.value })
  }

  const checklog = async (res) => {
    var resp = await axios.post("http://localhost:4000/checkData", logObj)
    setmsg(resp.data.msg)
    //  jwt token sent to user localstorage for verification and comparisons
    // 
    if (resp?.data?.msg == "login sucessfull") {
      localStorage.setItem("token", resp.data.token)
      localStorage.setItem("user", JSON.stringify(resp.data.user))
      navigate("/")
    }

  }
  console.log(logObj);

  return (

    <>


      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-blue-500">Log in</h1>
            <p className="text-gray-400">Log into your account</p>
          </div>
          <div className="space-y-4">
            <div>
              <p className='text-sm text-blue-500'>{msg}</p>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input onChange={checkValue} id="email" type="email" placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input onChange={checkValue} id="password" type="password" placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <button onClick={checklog} className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Log in
            </button>
          </div>
          <div className="mt-4 text-center text-gray-600">
            Forgot password?
            <Link to="/forgotpwd" className="text-blue-500 hover:underline">Click here</Link>
          </div>
          <div className=" text-center text-gray-600">
            Don't have an account?
            <Link to="/sign" className="text-blue-500 hover:underline">Sign up</Link>
          </div>
        </div>
      </div>




    </>
  )
}

export default Log_in