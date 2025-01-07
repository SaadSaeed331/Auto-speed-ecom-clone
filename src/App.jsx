import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from "./Pages/Cart"
import Singleproduct from "./Pages/Singleproduct"
import AddPrdt from './Pages/AddPrdt'
import CatagoryPage from './Pages/CatagoryPage'
import Sign_up from './Pages/Sign_up'
import Log_in from './Pages/Log_in'
import ProtectedRoute from './Pages/ProtectedRoute'
import Log_route from './Pages/Log_route'
import ChangePassWord from './Pages/ChangePassWord'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import Acount from './Pages/Acount'
import AdminPanel from './Pages/AdminPanel'


const App = () => {
  // const [array,setarray]= useState([])
  // useEffect(()=>{
  //   axios.get("http://localhost:4000/").then((res)=>{
  //       setarray(res.data)
  //   })
  // },[])
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/cart/' element={<Cart />} />
        <Route path='/singleproduct/:id' element={<Singleproduct />} />
        <Route path='/addprdt' element={<AddPrdt />} />
        <Route path='/catagory' element={<CatagoryPage />} />
        {/* changes  -------opt the files below*/}
        <Route path='/sign' element={<Log_route><Sign_up /></Log_route>} />
        <Route path='/login' element={<Log_route><Log_in /></Log_route>} />
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/changepwd" element={<ChangePassWord />} />
        <Route path='/forgotpwd' element={<ForgotPassword />} />
        <Route path='/set-new-password/:token' element={<ResetPassword />} />
        <Route path='/acount' element={<Acount/>}/>
        <Route path='/adminpanel' element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App