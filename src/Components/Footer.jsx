import React from 'react'

const Footer = () => {
    return (
        <>

            <footer className="bg-black text-white">
                <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12  py-10 md:grid-cols-2 xl:grid-cols-5 xl:px-5">
                    <div className="max-w-sm">

                        <div className="mt-4 mb-2 font-medium xl:mb-4">ABOUT US</div>
                        <div className="">
                            Must explain too you all this 
                            mistaken idea off denouncing 
                            pleasure and well praising pain was 
                            born and I will gives you complete 
                            accounts systems must.
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-4 mb-2 font-medium xl:mb-4">MY ACCOUNT</div>
                        <ul className="space-y-3">
                                <li><a className="hover:text-blue-600 hover:underline" href="#">About Us</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Delivery Information</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Privacy Policy</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Terms & Conditions</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Newsletter</a></li>
                            </ul>
                    </div>
                    <div>
                        <div className="mt-4 mb-2 font-medium xl:mb-4">INFORMATION</div>
                       
                            <ul className="space-y-3">
                                <li><a className="hover:text-blue-600 hover:underline" href="#">My Account</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Order History</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Wish List</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Specials</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Brands</a></li>
                            </ul>
                        
                    </div>

                    <div>
                        <div className="mt-4 mb-2 font-medium xl:mb-4">CUSTOMER SERVICE</div>
                        
                            <ul className="space-y-3">
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Contact Us</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Site Map</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Gift Certificates</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Affiliate</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Returns</a></li>
                            </ul>
                        
                    </div>
                    <div>
                        <div className="mt-4 mb-2 font-medium xl:mb-4">CONTACT US</div>
                       
                            <ul className="space-y-3">
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Address: 1093 Marigold Lane</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Coral Way, surat</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Call: 610-403-403</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Email: company@example.com</a></li>
                                
                            </ul>
                        
                    </div>



                    
                </div>
                <div className="border-t border-gray-600"></div>
                <div className="bg-black text-white">
                    <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center  sm:flex-row sm:justify-between sm:text-left">
                        <div className="">Powered By OpenCart autospeed © 2024</div>
                        <div className="">
                            <a className="" href="#">Privacy Policy</a>
                            <span>|</span>
                            <a className="" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer