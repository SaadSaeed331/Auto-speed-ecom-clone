import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Popularprdts = () => {
    const [view, setview] = useState("hidden")

    const openquickview = () => {
        if (view === "hidden") {
            setview("visible")
        }
        else {
            setview("hidden")
        }
    }

    return (
        <>


            <div className=" flex justify-center text-4xl font-semibold">
                <div className="border border-l-2 border-black"></div>
                <div className="border border-l-2 border-red-700 mr-4"></div>
                POPULAR PRODUCT
            </div>
            <p className='text-xl text-center tracking-wide'>The Best Products Of Autoparts</p>



            <div className="slider mx-10 flex justify-start relative">

                <div className="slider-child-2 p-8">
                    <div className="slider-child-image relative border ">
                        <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/cache/catalog/product/30-237x270.jpg" alt="" />
                        <p className="text-white bg-red-600 absolute top-2 right-3 px-1 py-2 rounded-full ">80%</p>
                        <Link to="/singleproduct">

                        <div className="catagory-slider-quickview bg-[#ffffffaa] absolute w-full h-full top-0">
                        </div>
                        </Link>
                            <button onClick={openquickview} className="quickview absolute top-0 mx-[47%] my-[50%] px-2 rounded-md bg-black text-white"><i className="fa-regular fa-eye"></i></button>
                    </div>
                    <p className='slider-child-text text-center text-[1.4vw] font-bold text-red-600'>$12.00</p>
                    <p className='text-center text-gray-500'>Alternator Engine Car</p>
                </div>
                <div className="slider-child-2 p-8">
                    <div className="slider-child-image relative border ">
                        <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/cache/catalog/product/10-237x270.jpg" alt="" />
                        <p className="text-white bg-red-600 absolute top-2 right-3 px-1 py-2 rounded-full ">90%</p>
                        <Link to="/singleproduct">

                        <div className="catagory-slider-quickview bg-[#ffffffaa] absolute w-full h-full top-0">
                        </div>
                        </Link>
                            <button onClick={openquickview} className="quickview absolute top-0 mx-[47%] my-[50%] px-2 rounded-md bg-black text-white"><i className="fa-regular fa-eye"></i></button>
                    </div>
                    <p className='slider-child-text text-center text-[1.4vw] font-bold text-red-600'>$24.00</p>
                    <p className='text-center text-gray-500'>Aluminium Alloy wheel</p>
                </div>



            </div>


            <div className={`quick-view ${view} h-[100vh] w-full bg-[#000000dc] flex justify-center items-center fixed top-0 z-10`}>
                <div className="bg-white w-[66%] h-[85%]">
                    <button onClick={openquickview} className="cross text-gray-400 float-right mt-[-1.6rem] text-xl"><i className="fa-solid fa-xmark"></i></button>
                    <div className="flex">
                        <div className="image border w-[47%] mx-5 my-5 rounded-xl shadow-[0px_0px_10px_2px_#00000024]">
                            <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/cache/catalog/product/28-700x800.jpg" alt="" />
                        </div>
                        <div className="description px-3 py-5   ">
                            <h1 className="text-3xl font-bold">Car Wheel Detailing And Cleaning</h1>
                            <div className="details w-2/4">

                                <p>Brand:<span className='float-right'>Apple</span></p>
                                <p>Product code:<span className='float-right'>Product 15</span></p>
                                <p>Reward Points:<span className='float-right'>100</span></p>
                                <p>Availability:<span className='float-right'> In Stock</span></p>
                            </div>
                            <div className="border-t my-7"></div>
                            <div className="price text-2xl font-bold">$26.00</div>
                            <div className="border rounded-lg px-4 py-3">
                                <h1 className='text-xl font-bold'>Available Options</h1>
                                <h1 className=' font-bold'>Colors:</h1>
                                <div className="colors flex">
                                    <button className="rounded-full w-5 h-5 mx-1 p-1 border border-black bg-red-500"></button>
                                    <button className="rounded-full w-5 h-5 mx-1 p-1 border border-black bg-yellow-500"></button>
                                    <button className="rounded-full w-5 h-5 mx-1 p-1 border border-black bg-blue-500"></button>
                                </div>
                                <div className="quantity mt-3">
                                    <button className="border rounded-l-lg px-5 py-1">-</button>
                                    <input className='border-y px-1 py-1 w-12' type="number" />
                                    <button className="border rounded-r-lg px-5 py-1">+</button>
                                </div>
                                <div className="quantity mt-3 flex justify-end">
                                    <button className="border rounded-lg px-2 bg-red-600 text-white py-1 ">ADD TO CART</button>
                                    <button className="border rounded-lg px-2 bg-red-600 text-white py-1 "><i class="fa-regular fa-heart"></i></button>
                                    <button className="border rounded-lg px-2 bg-red-600 text-white py-1 "><i class="fa-solid fa-retweet"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="delivery-info mx-[4.5rem] my-10 rounded-lg flex bg-gray-300">
                
                <div className="flex items-center px-2 py-5 mx-8">
                    <div className='w-[10vw] border border-red-600 rounded-full mx-2 p-5'>
                        <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/catalog/service/1.png" alt="" />
                    </div>
                    <div>
                        <h2 className=''>Free Shiping.</h2>
                        <p className='text-gray-500'>Free Worldwide Shiping On All Area On Order Above $100</p>
                    </div>
                </div>

                <div className="flex items-center px-2 py-5 mx-8">
                    <div className='w-[10vw] border border-red-600 rounded-full mx-2 p-5'>
                        <img  src="https://opencart.dostguru.com/AS01/autospeed_01/image/catalog/service/1.png" alt="" />
                    </div>
                    <div>
                        <h2 className=''>Free Shiping.</h2>
                        <p className='text-gray-500'>Free Worldwide Shiping On All Area On Order Above $100</p>
                    </div>
                </div>

                <div className="flex items-center px-2 py-5 mx-8">
                    <div className='w-[10vw] border border-red-600 rounded-full mx-2 p-5'>
                        <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/catalog/service/1.png" alt="" />
                    </div>
                    <div>
                        <h2 className=''>Free Shiping.</h2>
                        <p className='text-gray-500'>Free Worldwide Shiping On All Area On Order Above $100</p>
                    </div>
                </div>

                <div className="flex items-center px-2 py-5 mx-8">
                    <div className='w-[10vw] border border-red-600 rounded-full mx-2 p-5'>
                        <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/catalog/service/1.png" alt="" />
                    </div>
                    <div>
                        <h2 className=''>Free Shiping.</h2>
                        <p className='text-gray-500'>Free Worldwide Shiping On All Area On Order Above $100</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Popularprdts