import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { use } from 'react'

const Orderhistory = () => {

    const [order, setorder] = useState([])
    const [token, settoken] = useState(localStorage.getItem('token') || null)
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')) || null)
    useEffect(() => {
        axios.get('http://localhost:4000/orderhistory', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data, "order history");
                setorder(res.data)
            })
    }, [token])



    return (
        <>
            {order && order.length > 0 && order.map((e, i) => {
                return (
                    <>
                        <div key={i} className='p-5 bg-gray-200 m-5'>
                        <h1 className='text-lg m-2'>Order Status: <span className='font-bold text-red-600'> {e.status}</span></h1>
                            <h1 className='text-lg m-2'>Total Items: <span className='font-bold'>{e.items}</span></h1>
                            <h1 className='text-lg m-2'>Order Total: <span className='text-xl text-red-600 font-bold'>&nbsp; ${e.totalprice} </span> </h1>
                            <p className='text-xl font-bold'>Ordered Items:</p>
                            <h1 className='text-lg m-2'>{e.products.map((e, i) => {
                                return (
                                    <>
                                        <h1 className='text-lg m-2'>Product Name: <span className='font-bold'>{e.name}</span></h1>
                                        <h1 className='text-lg m-2'>Order Quantity:{e.quantity}</h1>
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

export default Orderhistory