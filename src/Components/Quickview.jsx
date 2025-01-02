import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addtocart} from '../Redux toolkit/Reducer'
import axios from 'axios'

const Quickview = ({ object, setobject }) => {

    const dispatch = useDispatch()
    const [quant, setquant] = useState(1)
  const [single, setsingle] = useState(object || {})
//   const { id } = useParams()



    useEffect(() => {
        setsingle({ ...single, quantity: quant })
    }, [])


    console.log(single);

    const addcart = () => {
        dispatch(addtocart(single))
    }

    const remove = () => {
        setobject("")
    }

    useEffect(() => {
        setsingle({ ...single, quantity: quant })
    }, [quant])

    const dec = () => {
        setquant(quant - 1)
    }

    const inc = () => {
        setquant(quant + 1)

    }
    console.log(object);


    return (
        <>

            {<div className={`quick-view h-[100vh] w-full bg-[#000000dc] flex justify-center items-center fixed top-0 left-0 z-10`}>
                <div className="bg-white w-[66%] h-[85%]">
                    <button onClick={remove} className="cross text-gray-400 float-right mt-[-1.6rem] text-xl"><i className="fa-solid fa-xmark"></i></button>
                    <div className="flex">
                        <div className="image border w-[47%] mx-5 my-5 rounded-xl shadow-[0px_0px_10px_2px_#00000024]">
                            <img src={object.prdtimg} alt="" />
                        </div>
                        <div className="description px-3 py-5   ">
                            <h1 className="text-3xl font-bold">{object.name}</h1>
                            <div className="details">

                                <p>Brand:<span className='float-right'>{object.brand}</span></p>
                                <p>Product code:<span className='float-right'>Product {object.prdtid} </span></p>
                                <p>Reward Points:<span className='float-right'>{object.rewardpoints}</span></p>
                                <p>Availability:<span className='float-right'>{object.availability}</span></p>
                            </div>
                            <div className="border-t my-7"></div>
                            <div className="price text-2xl font-bold">${object.price}</div>
                            <div className="border rounded-lg px-4 py-3">
                                <h1 className='text-xl font-bold'>Available Options</h1>
                                <h1 className=' font-bold'>Colors:</h1>
                                <div className="colors flex">
                                    <button className="rounded-full w-5 h-5 mx-1 p-1 border border-black bg-red-500"></button>
                                    <button className="rounded-full w-5 h-5 mx-1 p-1 border border-black bg-yellow-500"></button>
                                    <button className="rounded-full w-5 h-5 mx-1 p-1 border border-black bg-blue-500"></button>
                                </div>
                                <div className="quantity mt-3 flex">
                                    <button onClick={dec} className="border rounded-l-lg px-5 py-1  duration-200  hover:bg-gray-300">-</button>
                                    <div className='border-y px-4 py-1 w-12 ' >{quant}</div>
                                    <button onClick={inc} className="border rounded-r-lg px-5 py-1  duration-200  hover:bg-gray-300">+</button>
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
                </div>
            </div>}

        </>
    )
}

export default Quickview