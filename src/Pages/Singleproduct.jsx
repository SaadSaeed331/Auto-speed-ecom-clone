import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../Redux toolkit/Reducer'

const Singleproduct = () => {
  const { array } = useSelector((state) => state.main)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [single, setsingle] = useState({})
  const [quant, setquant] = useState(1)

  useEffect(() => {
    axios.get(`http://localhost:4000/singleprdt/${id}`).then((res) => {
      setsingle({...res.data, quantity: quant})
    })
    
  }, [])

  const addcart = () => {
    dispatch(addtocart(single))
  }

  useEffect(() => {
    setsingle({ ...single, quantity: quant })
  }, [quant])

  const decrement = () => {
    setquant(quant - 1)
  }

  const increment = () => {
    setquant(quant + 1)

  }

  console.log(single);
  console.log(quant)






  return (
    <div>
      <Navbar />


      <>

        <div className=" mx-[3rem] my-[3rem] flex justify-between">
          <div className="45-img w-[20%]">
            <img src={single.prdtimg} alt="pro img" />
          </div>
          <div className="w-[65%]">
            <div className="text-3xl">{single.name}</div>
            <div className="border-t my-5"></div>
            <div className="text-3xl">${single.price}.00</div>
            <div className="text-gray-400 text-sm">Ex tax: $100.00</div>
            <div className="border-t my-3"></div>
            <div className="info">
              <p>Brand: <span className='ml-4'>{single.brand}</span></p>
              <p>Product code: <span className='ml-4'>Product {single.prdtid}</span></p>
              <p>Reward Points: <span className='ml-4'>{single.rewardpoints}</span></p>
              <p>Availability: <span className='ml-4'>{single.availability}</span></p>
            </div>
            <div className='flex justify-around'>

              <div className="quantity mt-3 flex">
                <button onClick={decrement} className="border rounded-l-lg px-5 py-1  duration-200  hover:bg-gray-300">-</button>
                <div className='border-y px-4 py-1 w-12 ' >{quant}</div>
                <button onClick={increment} className="border rounded-r-lg px-5 py-1  duration-200  hover:bg-gray-300">+</button>
              </div>
              <div className="quantity mt-3 flex justify-end">
                <Link to={`/cart`}>
                  <button onClick={addcart} className="border rounded-lg px-2 bg-red-600 text-white py-1 duration-200  hover:bg-white hover:text-red-600">ADD TO CART</button>
                </Link>
                <button className="border rounded-lg px-2 bg-red-600 text-white py-1 duration-200  hover:bg-white hover:text-red-600"><i class="fa-regular fa-heart"></i></button>
                <button className="border rounded-lg px-2 bg-red-600 text-white py-1 duration-200  hover:bg-white hover:text-red-600"><i class="fa-solid fa-retweet"></i></button>
              </div>
            </div>


          </div>
        </div>


      </>







    </div>
  )
}

export default Singleproduct