import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, decrement, increment } from '../Redux toolkit/Reducer'
import axios from 'axios'

const Cart = () => {
  const { array } = useSelector((state) => state.main)
  const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  const [token,settoken] = useState(localStorage.getItem('token') || null)
  const dispatch = useDispatch()

  // console.log(token);


  const deleteitem = (i) => {
    dispatch(deleteItem(i))
  }
  console.log(array)

  const dec = (e) => {
    dispatch(decrement(e))

  }


  const inc = (e) => {
    dispatch(increment(e))

  }

  let total = array.reduce((a, b) => {
    return a + b.quantity * b.price
  }, 0)

  let qnty= array.reduce((a,b)=>{
    return a+b.quantity
  },0)
console.log(qnty ,"......qunatity");


  const OrderArray = () => {
    var resp = axios.post('http://localhost:4000/orderArray', {array,user,total,qnty},
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    )
  }



  return (
    <div>
      <Navbar />



      {array && array.length > 0 && array.map((e, i) => {
        return (
          <>

            <div className="border  p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-10 flex">
              <div className="img w-[20%] border p-2">
                <img className='w-full' src={e.prdtimg} alt="" />
              </div>
              <div className="info ml-5">
                <div className="text my-2">{e.name}</div>
                <div className="text my-2">Reward Points:{e.rewardpoints}</div>
                <div className="text my-2">Product code: <span>product {e.prdtid}</span> </div>
                <div className="text my-2"><b>Product Price:</b> ${e.price}.00</div>
                <div className="text my-2"><b>Total Price:</b> ${e.price * e.quantity}.00</div>
                <div className="flex my-2">
                  <button onClick={() => dec(e)} className='btn py-1 px-5 border hover:bg-gray-200'>-</button>
                  <div className="quant py-1 px-5 border ">{e.quantity}</div>
                  <button onClick={() => inc(e)} className='btn py-1 px-5 border hover:bg-gray-200'>+</button>
                </div>
              </div>
              <button onClick={() => deleteitem(i)} className="delete h-max p-2 border ml-[50%]"><i className="fa-solid fa-trash-can"></i></button>
            </div>

          </>
        )
      })}



      <div className="total mx-10   border-black border-t-4 border-b-4 my-5 flex justify-between">
        <div className="flex">
        <span className='text-3xl'>Total</span>
        <span className='font-bold text-3xl'>${total}.00</span>
        </div>
        <div className="">
          <button onClick={OrderArray} className='bg-red-600 mr-5 py-1 px-5 text-white rounded-lg my-1'>Order Now</button>
        </div>
      </div>

    </div>
  )
}

export default Cart