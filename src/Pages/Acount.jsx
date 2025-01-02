import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Acount = () => {
  return (
    <>
    <Navbar/>
    <div className='p-5 flex justify-around items-center bg-gray-200'>
    <div>

    <h1 className='text-2xl font-bold p-5'>Edit Profile:</h1>
    <Link to={'/changepwd'}>
    <button className='btn p-3 rounded bg-red-500 text-white ml-5'>Change Password</button>
    </Link>
    </div>
    <div>
    <h1 className='text-2xl font-bold p-5 text-red-500'>Edit Address</h1>
    <button className='btn p-3 bg-red-500 text-white rounded'>change address</button>
    </div>

    <div>


    <h1 className='text-2xl font-bold p-5 text-red-500'>Edit Payment Method</h1>
    <button className='btn p-3 rounded bg-red-500 text-white ml-5'>Add payment Method</button>
    </div>
    </div>
    

    <h1 className='text-2xl font-bold p-5 text-red-500'>Order History::</h1>

    
    </>
  )
}

export default Acount