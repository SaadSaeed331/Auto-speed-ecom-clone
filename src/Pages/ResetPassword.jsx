import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {

    const [password,setpassword] = useState("")
    const {token} = useParams()
    const navigate = useNavigate()

    const setvalue=(e)=>{
        setpassword(e.target.value)
    }

    const sendpass= async () => {
        var res = await axios.post("http://localhost:4000/sendpass",{password:password},
            {headers:
                {
                Authorization: `Bearer ${token}`
            }
        }
        )
        console.log(res.data);
        
        if(res.error== false){
            navigate("/login")
        }return
        
    }
    // make this page and send api and new password to backend then
    //  check isloggedin in if/else and then set this password with findeoneandupdate
  return (
    <div className='bg-[#d9d9d9] w-screen h-screen flex justify-center items-center'>
        <div><Toaster/></div>
    <div className="mx-auto max-w-sm lg:w-[30%] p-6 bg-white rounded-lg shadow-md">
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Set New Password</h2>
            <p>Enter your new password.</p>
        </div>
        <div className="mt-6 space-y-4">
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input onChange={setvalue}
                    id="password"
                    type="password"
                    placeholder="new Password"
                    required
                    className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button
                onClick={sendpass}
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Reset Password
            </button>
        </div>
    </div>



</div>
  )
}

export default ResetPassword