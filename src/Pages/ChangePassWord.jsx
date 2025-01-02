import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ChangePassWord = () => {

    const [Obj, setObj] = useState({})
    const [msg, setmsg] = useState("")
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    var navigate = useNavigate()


    const checkValue = (e) => {
        setObj({...Obj, [e.target.id]: e.target.value })
    }

    const updatepassword = async() => {
        // console.log(token);
        let resp = await axios.patch("http://localhost:4000/changepwd", Obj,  {
            headers: {
              Authorization: `Bearer ${token}`
            }
         }
        )
        console.log(resp.data);
        setmsg(resp.data.msg)
    }



    return (
        <div>


            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-blue-500">Change Password</h1>

                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className='text-sm text-blue-500'>{msg}</p>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Old Password</label>
                            <input onChange={checkValue} id="passwordold" type="email" placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                            <input onChange={checkValue} id="passwordnew" type="password" placeholder="Enter your new password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <button onClick={updatepassword} className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Reset Password
                        </button>
                    </div>
                    <div className="mt-4 text-center text-gray-600">
                        Don't want to change password?
                        <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ChangePassWord