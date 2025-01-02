import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import { Link } from 'react-router-dom'
import Quickview from '../Components/Quickview'

const CatagoryPage = () => {
    const categoryArray = ["interior", "exterior", "battery", "auto", "scooter"]
    const [category, setcategory] = useState("interior")
    const [array, setarray] = useState([])
    const [filteredarray, setfiltered] = useState([])
    const [object, setobject] = useState("")


    useEffect(() => {
        axios.get("http://localhost:4000/").then((res) => {
            setarray(res.data)
            // console.log(res.data)
        })
    }, [])

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
        <>
            <Navbar />
            <div className="flex">

                <div className="leftdiv w-[10%]">


                    <div className="h-full mx-14">
                        <div className="">
                            {
                                categoryArray.map((e, i) => {
                                    return (
                                        <>
                                            <button onClick={() => filtercatagory(e)} className="btn border w-[7rem] px-7 py-3 rounded hover:bg-red-600 hover:text-white mx-3">{e}</button>

                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
                <div className="right ml-16 p-5 border ">


                        <p className='text-3xl tracking-wide'>Catagory: <span className='font-semibold'>{category}</span></p>
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

                    {object && <Quickview object={object} setobject={setobject} />}

                </div>

            </div>

        </>
    )
}

export default CatagoryPage