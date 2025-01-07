import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import OrderStatus from '../Components/OrderStatus'

const AdminPanel = () => {
  const [data, setdata] = useState([])
  const [token, settoken] = useState(localStorage.getItem('token') || null)

  useEffect(() => {
      getdata()

  }, [])

  const getdata = async ()=>{
    var resp = await axios.get("http://localhost:4000/getData",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    console.log(resp.data);
    setdata(resp.data)
  }
  return (
    <>
    <Navbar/>
      <h1 className="text-4xl text-blue-600 p-5 underline">Admin Panel:</h1>

      {data && data.length > 0 && data?.map((e, i) => {
                return (
                    <>
                        <div key={i} className='p-5 bg-gray-200 m-5 text-sm'>
                          <OrderStatus id={e._id} getdata={getdata} />
                        <h1 className=' m-2'>Order Id: <span className='font-bold text-red-600'> {e._id}</span></h1>
                        <h1 className=' m-2'>Order Status: <span className='font-bold text-red-600'> {e.status}</span></h1>
                        <h1 className=' m-2'>Customer Name: <span className='font-bold text-red-600'> {e?.costumername}</span></h1>
                        <h1 className=' m-2'>Customer Email: <span className='font-bold text-red-600'> {e?.costumerEmail}</span></h1>
                            <h1 className=' m-2'>Total Items: <span className='font-bold'>{e.items}</span></h1>
                            <h1 className=' m-2'>Order Total: <span className=' text-red-600 font-bold'>&nbsp; ${e.totalprice} </span> </h1>
                            <p className=' font-bold'>Ordered Items:</p>
                            <h1 className=' m-2'>{e.products.map((e, i) => {
                                return (
                                    <>
                                        <h1 className=' m-2'>Product Name: <span className='font-bold'>{e.name}</span></h1>
                                        <h1 className=' m-2'>Order Quantity:{e.quantity}</h1>
                                    </>
                                )
                            })
                            }</h1>
                        </div>
                    </>
                )
            })
            }
    
    </>
  )
}

export default AdminPanel