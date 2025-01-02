import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ForgotPassword = () => {

    const [email,setemail] = useState("")
    const [msg,setmsg] = useState("")

    const setvalue=(e)=>{
        setemail(e.target.value)
    }

    const sendmail= async () => {
        var res = await axios.post("http://localhost:4000/sendmail",{email:email})
        console.log(res.data);
        toast.success(res.data)
        setmsg(res.data)
    }

    return (
        <div className='bg-[#d9d9d9] w-screen h-screen flex justify-center items-center'>
            <div>{}</div>
            <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Forgot Password</h2>
                    <p>Enter your email address and we'll send you a link to reset your password.</p>
                </div>
                <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input onChange={setvalue}
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        onClick={sendmail}
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Verify Email
                    </button>
                </div>
            </div>



        </div>
    )
}

export default ForgotPassword