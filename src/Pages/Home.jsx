import React from 'react'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import OurCatagory from '../Components/OurCatagory'
import Catagory from '../Components/Catagory'
import Popularprdts from '../Components/Popularprdts'
import Clienttestimonial from '../Components/Clienttestimonial'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      
      <Navbar/>
      {/* <Link to="/cart">Cart</Link> */}


      <div className="hero-section h-max">
        <img className='h-max w-max' src="https://opencart.dostguru.com/AS01/autospeed_01/image/cache/catalog/slider/s1-1920x700.jpg" alt="" />
        <div className="hearo-text z-10 text-center mt-[-28vw]">

          <h1 className='text-[4vw] font-mono text-white'> Welcome To Autoparts</h1>
          <h1 className='text-[4vw] font-mono text-white'> NEW MODEL 2024</h1>
          <h1 className=' text-white text-[1.3vw]'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.quasi provident blanditiis corrupti <br /> Quas ipsum consequatur, quasi provident blanditiis corrupti </h1>
          <button className='text-white bg-red-500 rounded-md mt-9 px-9 py-2'>Shop Now</button>
        </div>
      </div>

      <OurCatagory/>
      <Catagory/>
      {/* <Popularprdts/> */}
      <Clienttestimonial/>
      <Footer/>




    </div>
  )
}

export default Home