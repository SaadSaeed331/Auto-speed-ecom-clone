import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Quickview from './Quickview'

const Catagory = () => {
    const categoryArray = ["interior", "exterior", "battery", "auto", "scooter"]
    const [category, setcategory] = useState("interior")
    const [array, setarray] = useState([])
    const [indicator, setindicator] = useState("")
    const [filteredarray, setfiltered] = useState([])
    const [object, setobject] = useState("")


    useEffect(() => {
        axios.get("http://localhost:4000/").then((res) => {
            setarray(res.data)
            // console.log(res.data)
        })
    }, [indicator])

    useEffect(() => {
        setfiltered(array.filter((e, i) => {
            return e.catagory == category
        }))
    }, [array, category])


    const openquickview = (obj) => {
        setobject(obj)
    }

    const filtercatagory = (e) => {
        setcategory(e)
    }


    // console.log(filteredarray, "filteredArray");
    // console.log(category, "category")
    console.log(array, "array")

    return (
        <div className='mb-[5rem]'>


            <div className="flex justify-center text-3xl font-semibold">
                <div className="border border-l-2 border-black"></div>
                <div className="border border-l-2 border-red-700 mr-4"></div>
                CATAGORY PRODUCTS
            </div>
            <p className='text-lg text-center tracking-wide'>The Best Categories Of Autoparts</p>

            <div className="flex justify-center">
                {
                    categoryArray.map((e, i) => {
                        return (
                            <>
                                <button onClick={() => filtercatagory(e)} className="btn border px-7 py-3 rounded hover:bg-red-600 hover:text-white mx-3">{e}</button>

                            </>
                        )
                    })
                }
            </div>

            <div className="slider flex justify-center px-5">

                {filteredarray.map((e) => {
                    return (
                        <>
                            <div className="slider-child-2 m-8">
                                <div className="slider-child-image relative border rounded-md">
                                    <img className='rounded-md' src={e.prdtimg} alt="" />
                                    <Link to={`/singleproduct/${e._id}`}>

                                        <div className="catagory-slider-quickview bg-[#ffffffaa] absolute w-full h-full top-0 ">
                                        </div>
                                    </Link>
                                    <button onClick={() => openquickview(e)} className="quickview absolute top-0  mx-[47%] my-[50%] px-2 rounded-md duration-200 hover:bg-red-500 bg-black text-white"><i className="fa-regular fa-eye"></i></button>
                                </div>
                                <p className='slider-child-text text-center text-[1.4vw] font-bold'>${e.price}</p>
                                <p className='text-center text-gray-500'>{e.name}</p>
                            </div>


                        </>
                    )
                })}





            </div>




            <div className="shop-now-section-catagory flex">
                <div className="lemp">
                    <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/cache/catalog/img-banner/imgbanner-1-640x350.jpg" alt="" />
                    <div className='mt-[-10rem] px-5'>
                        <p className='text-[rgb(255,45,55)] text-3xl font-bold'>LEMPS & LIGHTS</p>
                        <p className='text-white'>MEGA SALE</p>
                        <p className='text-white'>Sale upto 35% off</p>
                        <button className='bg-red-600 px-4 py-1 text-white'>SHOP NOW</button>
                    </div>
                </div>
                <div className="lemp">
                    <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/cache/catalog/img-banner/imgbanner-1-640x350.jpg" alt="" />
                    <div className='mt-[-10rem] px-5 text-center'>
                        <p className='text-[rgb(255,45,55)] text-3xl font-bold'>LEMPS & LIGHTS</p>
                        <p className='text-white'>MEGA SALE</p>
                        <p className='text-white'>Sale upto 35% off</p>
                        <button className='bg-red-600 px-4 py-1 text-white'>SHOP NOW</button>
                    </div>
                </div>
                <div className="lemp">
                    <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/cache/catalog/img-banner/imgbanner-1-640x350.jpg" alt="" />
                    <div className='mt-[-10rem] px-5 text-right'>
                        <p className='text-[rgb(255,45,55)] text-3xl font-bold'>LEMPS & LIGHTS</p>
                        <p className='text-white'>MEGA SALE</p>
                        <p className='text-white'>Sale upto 35% off</p>
                        <button className='bg-red-600 px-4 py-1 text-white'>SHOP NOW</button>
                    </div>
                </div>

            </div>

            {object && <Quickview object={object} setobject={setobject} />}

        </div>
    )
}

export default Catagory