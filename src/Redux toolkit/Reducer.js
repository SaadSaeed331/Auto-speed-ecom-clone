import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "CartSlice",
    initialState: {
        array: [],
    },
    reducers: {
        addtocart: (state, action) => {
            console.log(action.payload);
            const existItem=state.array.find((e,i)=>{
                return action.payload._id == e._id
            })
            if(!existItem){
                return {
                    ...state,
                    array: [...state.array, action.payload]
                }
            }else{
               let arr= state.array.map((e,i)=>{
                    if(existItem._id == e._id){
                        return {...e,quantity:e.quantity+action.payload.quantity}
                    }else{
                        return e
                    }
                })
                state.array= arr
            }
            console.log(existItem,"existItem")
        },
        deleteItem: (state, action) => {
            return {
                ...state,
                array: state.array.filter((e, idx) => {
                    return idx != action.payload
                })

            }
        },
        increment: (state, action) => {
            // console.log(action.payload, "action payload");
            state.array = state.array.map((e, i) => {
                if (action.payload._id == e._id) {
                    return { ...e, quantity: e.quantity + 1 }
                } else {
                    return e
                }
            })
        },
        decrement: (state, action) => {
            state.array = state.array.map((e, i) => {
                if (action.payload._id == e._id) {
                    if (e.quantity > 1) {
                        return { ...e, quantity: e.quantity - 1 }
                    }
                    else {
                        return e
                    }
                } else {
                    return e
                }
            })
        }
    }
})

export const { addtocart, deleteItem, increment, decrement } = CartSlice.actions

export default CartSlice.reducer    