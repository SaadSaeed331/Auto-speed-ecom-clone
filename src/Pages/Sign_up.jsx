import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Sign_up = () => {

  const [obj, setobj] = useState({})
  const [msg, setmsg] = useState("")
  const navigate = useNavigate()

  const getValue = (e) => {
    setobj({ ...obj, [e.target.id]: e.target.value })
  }

  const signup = async (e) => {

    var resp = await axios.post("http://localhost:4000/postData", obj)
    setmsg(resp.data.msg)

    if (resp?.data?.msg == "Account registered") {
      navigate("/login")
    }
  }



  console.log(obj, "value object");
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-green-500">Sign Up</h1>
            <p className="text-gray-600">Create your account</p>
          </div>
          <div className="space-y-4">
            <div>
              <p className='text-sm text-blue-500'>{msg}</p>

              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input onChange={getValue} id="name" type="text" placeholder="Enter your name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input onChange={getValue} id="email" type="email" placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input onChange={getValue} id="password" type="password" placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <button onClick={signup} className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center text-gray-600">
            Already have an account?
            <Link to="/login" className="text-green-500 hover:underline">Log in</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Sign_up