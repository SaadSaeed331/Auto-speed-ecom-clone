import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrderStatus = ({ id,getdata }) => {

    const [selectedValue, setSelectedValue] = useState("");
    const [token, settoken] = useState(localStorage.getItem('token') || null)

    useEffect(()=>{
        
        setstatus()

    },[selectedValue])

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const setstatus = async () => {
        if(selectedValue !== ""){
        var resp = await axios.patch("http://localhost:4000/setstatus", {
            status: selectedValue, id: id
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(resp.data){
            getdata()
        }
    }else{
        console.log("No value selected"); 
    }

    }
    console.log(selectedValue, ".........value");
    return (
        <>
            <div>
                <label htmlFor="options">Choose an option:</label>
                <select id="options" value={selectedValue} onChange={handleChange}>
                    <option value="" disabled>
                        -- Select an option --
                    </option>
                    <option value="Pending">Pending</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Delivered">Delivered</option>
                </select>
                <p>You selected: {selectedValue}</p>
            </div>

        </>
    )



}

export default OrderStatus