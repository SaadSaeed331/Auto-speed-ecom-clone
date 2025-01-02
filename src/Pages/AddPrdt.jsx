import React, { useEffect, useState } from 'react'
import axios from 'axios'




const Addprdt = () => {

    
    const [obj, setobj] = useState({})
    const [indicator, setindicator] = useState("")


    // useEffect(()=>{
    //     axios.get("http://localhost:4000/").then((res)=>{
    //         setobj(res.data)
    //         console.log(res.data)
    //       })
    //   },[indicator])



    const inpobject = (e) => {
        setobj({ ...obj, [e.target.id]: e.target.value })
    }
    console.log(obj,"object add");

    const saveinfo = async () => {
        var res = await axios.post("http://localhost:4000/addData", obj)
        console.log(res);
        setindicator(res.data)

    }


    return (
        <>
            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
                <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <div className="px-8 py-6">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">ADD PRODUCT</h1>

                        </div>
                        <div className='flex flex-col'>



                            <label className="font-bold mx-2 my-3" htmlFor="name">Name:</label>
                            <input onChange={inpobject} className="input border rounded-lg px-2 py-1 w-[50%]" id="name" placeholder="Product name" />

                            <label className="font-bold mx-2 my-3" htmlFor="price">Price:</label>
                            <input onChange={inpobject} className="input border rounded-lg px-2 py-1 w-[50%]" id="price" placeholder="Price" />

                            <label className="font-bold mx-2 my-3" htmlFor="prdtid">Product Id:</label>
                            <input type='number' onChange={inpobject} className="input border rounded-lg px-2 py-1 w-[50%]" id="prdtid" placeholder="e.g. product 12" />

                            <label className="font-bold mx-2  my-3" htmlFor="brand">Brand:</label>
                            <input onChange={inpobject} className="border rounded-lg py-1 px-2  w-[50%]" id="brand" placeholder="e.g Honda" />

                            <label className="font-bold mx-2  my-3" htmlFor="catagory">Catagory:</label>
                            <input onChange={inpobject} className="border rounded-lg py-1 px-2  w-[50%]" id="catagory" placeholder="e.g extrior/mechanical" />

                            <label className="font-bold mx-2  my-3" htmlFor="prdtimg">Product Image:</label>
                            <input onChange={inpobject} className="border rounded-lg py-1 px-2  w-[50%]" id="prdtimg" type='url' placeholder="url" />

                            <label className="font-bold mx-2 my-3" htmlFor="rewardpoints">Reward Points:</label>
                            <input onChange={inpobject} className="border rounded-lg py-1 px-2 w-[50%]" id="rewardpoints" placeholder="e.g. 300" />

                            <label className="font-bold mx-2 my-3" htmlFor="availability">Availability:</label>
                            <input onChange={inpobject} className="border rounded-lg py-1 px-2 w-[50%]" id="availability" placeholder="List item availability here" />

                            



                        </div>

                        <div className="flex mt-6">
                            <button onClick={saveinfo} className="button bg-green-600 text-white px-10 py-1 rounded-lg" variant="primary">Save</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Addprdt