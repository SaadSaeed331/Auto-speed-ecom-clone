import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
        
    
        return (
            <div>

                <div className="nav-black-1 font-sans tracking-wide bg-black px-[3.5rem] py-2 flex justify-between">
                    <div className="flex">
                        <p className='text-white'>Welcome to Autoparts online Store</p>
                        <div className=" border-l border-white mx-3"></div>
                        <p className='text-white'><i className="fa-solid fa-truck text-[rgb(239,45,30)]"></i>Track Your order</p>
                        <div className=" border-l border-white mx-3"></div>
                        <p className='text-white'><i className="fa-regular fa-envelope  text-[rgb(239,45,30)]"></i>prestashopdemo@hotmail.com</p>
                    </div>
                    <div className="flex pr-6">
                        <button className='dropdown text-white'>Language<i className="fa-solid fa-angle-down"></i></button>
                        <div className=" border-l border-white mx-3"></div>
                        <button className='dropdown text-white'><i className="fa-solid fa-dollar-sign"></i>Currency<i className="fa-solid fa-angle-down"></i></button>
                    </div>
                </div>


                <div className="main-nav border flex justify-between px-[3.5rem] py-6">
                    <div className='flex'>
                    <div className="w-[12.5rem]">
                        <img src="https://opencart.dostguru.com/AS01/autospeed_01/image/catalog/logo.png" alt="" />
                    </div>
                    <div className='border rounded-lg border-r-0 ml-10 flex'> 
                        <input type="text" placeholder='Search' className='w-[20rem]  border-r py-2 px-5'/>
                        <select name="" id="" className='px-6'>
                            <option value="">catagories</option>
                            <option value="">bajaj</option>
                            <option value="">interior</option>
                            <option value="">exterior</option>
                            <option value="">electical</option>
                            <option value="">three wheeler</option>
                            <option value="">battery</option>
                            <option value="">repair</option>
                            <option value="">wheel</option>
                            <option value="">car</option>
                            <option value="">alloy wheel</option>
                        </select>
                        
                        <button className='bg-black text-white px-7 rounded-r-lg py-2 duration-200 hover:bg-[rgb(239,44,30)]'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    </div>
                    <div className='flex'>
                      <Link to={"/addprdt"}>
                        <div className="myaccount text-center mx-20  hover:bg-gray-300 rounded-lg px-2">
                        <i class="fa-solid fa-plus text-xl"></i>
                        <p className='text-sm text-gray-500'>Add Product</p>
                        </div>
                      </Link>
                      <Link to={"/acount"}>
                        <div className="myaccount text-center mx-3  hover:bg-gray-300">
                        <i class="fa-regular fa-user text-xl"></i>
                        <p className='text-sm text-gray-500'>My Account</p>
                        </div>
                      </Link>
                        <div className="myaccount text-center mx-3  hover:bg-gray-300">
                        <i class="fa-regular fa-heart text-xl"></i>
                        <p className='text-sm text-gray-500'>My Wishlist</p>
                        </div>
                        <div className="myaccount text-center mx-3  hover:bg-gray-300">
                          <Link to={"/cart"}>
                        <i class="fa-solid fa-bag-shopping text-xl"></i>
                        <p className='text-sm text-gray-500'>My Cart</p>
                          </Link>
                        </div>
                    </div>
                </div>
                <div className="nav-3 px-12 py-3 flex">



                <details class="group transition-all duration-150 h-10 open:h-max   w-56">
        <summary class="transition-all duration-500 flex cursor-pointer items-center  bg-red-500 rounded-lg px-4 py-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>

          <span class="ml-3 text-sm font-medium  text-white"> All Catagories </span>

          <span class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </summary>

        <nav class="mt-1.5 ml-8 flex flex-col transition-all duration-500 bg-white text-black">
          <a href="" class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>

            <span class="ml-3 text-sm font-medium"> Bajaj </span>
          </a>

          <a href="" class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            <span class="ml-3 text-sm font-medium"> Electical </span>
          </a>
          <a href="" class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            <span class="ml-3 text-sm font-medium"> Extrior </span>
          </a>
          <a href="" class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            <span class="ml-3 text-sm font-medium"> Three wheeler </span>
          </a>
          <a href="" class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            <span class="ml-3 text-sm font-medium"> Battery </span>
          </a>
          <a href="" class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            <span class="ml-3 text-sm font-medium"> Auto Mechanic </span>
          </a>
          <a href="" class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            <span class="ml-3 text-sm font-medium"> Auto Repair </span>
          </a>
        </nav>
      </details>


      
          <ul className="nav-options flex mx-5">
              <li className='mx-3'>HOME</li>
              <li className='mx-3'>SPECIALS</li>
              <li className='mx-3'>CONTACT</li>
              <li className='mx-3'>SITEMAP</li>
              <li className='mx-3'>BRAND</li>
          </ul>



                </div>
                
            </div>
        )
    }


    export default Navbar