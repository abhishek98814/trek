import React, { useState } from 'react';
import { Link, NavLink, useParams, useLocation } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { TbBrandLinqpad } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { TbBrandBooking } from "react-icons/tb";
import { VscSaveAll } from "react-icons/vsc";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



import './sidebar.css'

const Sidebar = () => {
    const location = useLocation();
    const [isAllTrek, setAllTrek] = useState(false);
    const [isaddTrek, setAddTrek] = useState(false);
    const [isAllPageOpen, setAllPageOpen] = useState(false);

    const toggleAllPage = () => {
        setAllPageOpen(!isAllPageOpen);
    };


    const toggleAllTrek = () => {
        setAllTrek(!isAllTrek);
    };

    const toggleAddTrek = () => {
        setAddTrek(!isaddTrek)
    }



    let { dash } = useParams()

    if (dash === undefined) {
        dash = "dash/overview"
    }

    const isOverviewActive = location.pathname === '/dash/overview';
    const isDescriptionInquiryActive = location.pathname === '/dash/allpage';
    const isInquiryUserActive = location.pathname === '/dash/inquiry';
    const isMegaMenuActive = location.pathname === '/dash/megamenuDesc';
    const isOffVlogDesc = location.pathname === '/dash/offerVlogDesc';


    const isaddOverviewActive = location.pathname === '/dash/addOverview';
    const isaddgalleryActive = location.pathname === '/dash/gallery';
    const isaddDescriptionActive = location.pathname === '/dash/about';
    const isaddMegamenuActive = location.pathname === '/dash/megamenu';
    const isaddOfflogo = location.pathname === '/dash/offervlog';

    return (

        <div className="h-screen fixed top-0 left-0 w-1/6 bg-white overflow-y-scroll scrollbar-hidden">
            <h2 className='px-8 py-4   font-semibold'></h2>
            <div className="my-8 flex flex-col">
                <div>
                    <h2 className='flex text-colorr  font-semibold px-6 items-center  py-2 gap-2 mt-8'>
                        <Link to="/" className='hover:bg-gray-300 hover:rounded-md flex gap-2 items-center '>
                            <LuLayoutDashboard />
                            Dashboard
                        </Link>
                    </h2>

                    <div className='mt-2 mx-4'>
                        <h3 style={{ color: "#1E1E1E" }} onClick={toggleAllTrek} className='textcolorr hover:bg-gray-300 hover:rounded-md py-2 gap-2 flex items-center font-semibold'>
                            <span className='flex items-center gap-2 mx-2'>

                                <LuLayoutDashboard />
                                <span className='flex items-center justify-between'>
                                    Treks
                                    {isAllTrek ? <IoIosArrowDown className='mt-1 mx-24' /> : <IoIosArrowForward className='mt-1 mx-24' />}

                                    {/* <IoIosArrowForward className='mt-1 mx-24' /> */}
                                    {/* <IoIosArrowDown className='mt-1 mx-24' /> */}
                                </span>
                            </span>
                        </h3>


                        {isAllTrek && (
                            <ul className='pb-2 pl-8'>

                                <li
                                    // style={{ backgroundColor: isOverviewActive ? 'blue' : 'transparent' }}
                                    // className={`my-1 hover:bg-gray-400 gap-2 flex  items-center ${isOverviewActive ? 'activeLink' : ''}`}
                                    className='hover:bg-gray-300 px-1  py-2 textcolorr hover:rounded'
                                >
                                    <NavLink to="alltreks" className="py-1 rounded-md hover:text-black  ">
                                        All Trek
                                    </NavLink>
                                </li>
                                <li
                                    //  style={{ backgroundColor: isaddOverviewActive ? 'blue' : 'transparent', hover: "gray" }}
                                    // className={`  items-center py-2  flex gap-2 ${isaddOverviewActive ? 'activeLink' : ''}`}
                                    className='hover:bg-gray-300 px-1 py-2 hover:rounded textcolorr font-semibold '
                                >
                                    <NavLink to="addOverview/:id" className='py-1  rounded-md hover:text-black hover:bg-gray-300  transition duration-300 ease-in-out'>
                                        Add Trek
                                    </NavLink>
                                </li>
                                <li
                                    // style={{ backgroundColor: isOverviewActive ? 'blue' : 'transparent' }}
                                    // className={`my-1 gap-2 flex  items-center ${isOverviewActive ? 'activeLink' : ''}`}
                                    className='hover:bg-gray-300 items-center py-2 px-1 hover:rounded '

                                >
                                    <NavLink to="location" className="items-center py-2 hover:text-black rounded-md font-medium hover:bg-gray-300">
                                        Location
                                    </NavLink>
                                </li>


                            </ul>
                        )}
                        <h3
                            // style={{ backgroundColor: isInquiryUserActive ? 'blue' : 'transparent' }}
                            // className={`my-2 items-center flex gap-2 ${isInquiryUserActive ? 'activeLink' : ''}`}
                            className='textcolorr  hover:bg-gray-300 py-2  hover:rounded-md hover-mx-3  gap-2 flex items-center  font-semibold'

                        >
                            <span className='flex items-center gap-2 mx-2'>

                                <TbBrandBooking />
                                <NavLink to="bookingss" className=" rounded-md">
                                    Booking
                                </NavLink>
                            </span>
                        </h3>
                        <h3
                            // style={{ backgroundColor: isInquiryUserActive ? 'blue' : 'transparent' }}
                            // className={`my-2 items-center flex gap-2 ${isInquiryUserActive ? 'activeLink' : ''}`}
                            // className=' textcolorr hover:bg-gray-300 mt-4  gap-2 flex items-center font-semibold'
                            className='textcolorr  hover:bg-gray-300 py-2  hover:rounded-md hover-mx-3  gap-2 flex items-center  font-semibold'
                        >

                            <span className='flex items-center gap-2 mx-2'>

                                <TbBrandLinqpad />
                                <NavLink to="inquiryy" className=" rounded-md">
                                    Inquiry
                                </NavLink>
                            </span>

                        </h3>
                        <h3
                            // style={{ backgroundColor: isInquiryUserActive ? 'blue' : 'transparent' }}
                            // className={`my-2 items-center flex gap-2 ${isInquiryUserActive ? 'activeLink' : ''}`}
                            // className=' textcolorr mt-4  gap-2 flex items-center font-semibold'
                            className='textcolorr  hover:bg-gray-300 py-2  hover:rounded-md hover-mx-3  gap-2 flex items-center  font-semibold'
                        >
                            <span className='flex items-center gap-2 mx-2'>

                                <CiCircleList />
                                <NavLink to="userlist" className="rounded-md">
                                    User List
                                </NavLink>
                            </span>
                        </h3>
                        <h3
                            // style={{ backgroundColor: isInquiryUserActive ? 'blue' : 'transparent' }}
                            // className={`my-2 items-center flex gap-2 ${isInquiryUserActive ? 'activeLink' : ''}`}
                            className='textcolorr  hover:bg-gray-300 hover:rounded-md py-2  gap-2 flex items-center font-semibold'
                        >
                            <span className='flex items-center gap-2 mx-2'>

                                <BiSolidOffer />
                                <NavLink to="/offerlist" className="rounded-md">
                                    Offer
                                </NavLink>
                            </span>
                        </h3>
                        <h3
                            // style={{ backgroundColor: isInquiryUserActive ? 'blue' : 'transparent' }}
                            // className={`my-2 items-center flex gap-2 ${isInquiryUserActive ? 'activeLink' : ''}`}
                            className='textcolorr   hover:bg-gray-300 hover:rounded-md gap-2 py-2 flex items-center font-semibold'
                        >
                            <span className='flex items-center gap-2 mx-2'>
                                <IoSettingsSharp />
                                <NavLink to="" className=" rounded-md">
                                    Settings
                                </NavLink>
                            </span>
                        </h3>
                        <h3
                            className='textcolorr py-2 hover:bg-gray-300 hover:rounded-md gap-2 flex items-center font-semibold cursor-pointer'
                            onClick={toggleAllPage}
                        >
                            <span className='flex items-center gap-2 mx-2'>
                                <VscSaveAll />
                                <span className='flex'>
                                    <span className="whitespace-nowrap">
                                        All Page
                                    </span>
                                    {isAllPageOpen ? <IoIosArrowDown className='mt-1 mx-16' /> : <IoIosArrowForward className='mt-1 mx-16' />}
                                </span>
                            </span>
                        </h3>
                        {isAllPageOpen && (
                            <ul className='pb-2 pl-8'>

                                <li style={{ whiteSpace: "nowrap" }} className='hover:bg-gray-300 py-2 px-1 textcolorr font-sm  hover:rounded'>
                                    <NavLink to="aboutus">
                                        About Us
                                    </NavLink>
                                </li>
                                <li style={{ whiteSpace: "nowrap" }} className='hover:bg-gray-300 py-2 px-1 textcolorr hover:rounded'>Our Team</li>
                                <li style={{ whiteSpace: "nowrap" }} className='hover:bg-gray-300 py-2 px-1 textcolorr hover:rounded'>
                                    <NavLink to="award&certificate"> Award & Certification</NavLink>
                                </li>
                                <li style={{ whiteSpace: "nowrap" }} className='hover:bg-gray-300 py-2 px-1 textcolorr hover:rounded'>Gallery</li>
                                <li style={{ whiteSpace: "nowrap" }} className='hover:bg-gray-300 py-2 px-1 textcolorr hover:rounded'>
                                    <NavLink to="termcond">Term & Condition</NavLink>
                                </li>
                                <li style={{ whiteSpace: "nowrap" }} className='hover:bg-gray-300 py-2 px-1 textcolorr hover:rounded'>
                                    <NavLink to="privacy">Privacy & Policy</NavLink>
                                </li>
                                <li style={{ whiteSpace: "nowrap" }} className='hover:bg-gray-300 py-2 px-1 textcolorr hover:rounded'>
                                    <NavLink to="bookingcancelation">Booking & Cancellation</NavLink>
                                </li>


                            </ul>
                        )}
                    </div>

                    <div >
                        {/* <h3 onClick={toggleAddTrek} className='px-6  font-semibold py-2 bg-slate-600 flex gap-2 items-center'>Add Trek

                        </h3> */}
                        {/* {isaddTrek && (
                            <ul className='my-0 backdrop-blur-0 shadow-2xl'>

                                <li style={{ backgroundColor: isaddOverviewActive ? 'blue' : 'transparent' }}
                                    className={`px-6 items-center py-2 flex gap-2 ${isaddOverviewActive ? 'activeLink' : ''}`}
                                >
                                    <NavLink to="/dash/addOverview" className='py-1 rounded-md'>
                                        Add Overview
                                    </NavLink>
                                </li>
                                <li style={{ backgroundColor: isaddOverviewActive ? 'blue' : 'transparent' }}
                                    className={`px-6 items-center py-2 flex gap-2 ${isaddOverviewActive ? 'activeLink' : ''}`}
                                >
                                    <NavLink to="/dash/aboutCompany" className='py-1 rounded-md'>
                                        About Company
                                    </NavLink>
                                </li>
                                <li style={{ backgroundColor: isaddgalleryActive ? 'blue' : 'transparent' }}
                                    className={`px-6 items-center my-2 flex gap-2 ${isaddgalleryActive ? 'activeLink' : ''}`}
                                >
                                    <NavLink to="/dash/gallery" className='py-1 rounded-md'>
                                        Gallery
                                    </NavLink>
                                </li>

                                <li style={{ backgroundColor: isaddDescriptionActive ? 'blue' : 'transparent' }}
                                    className={`px-6 items-center my-2 flex gap-2 ${isaddDescriptionActive ? 'activeLink' : ''}`}
                                >
                                    <NavLink to="/dash/about" className='py-1 rounded-md'>
                                        Description
                                    </NavLink>
                                </li>
                                <li style={{ backgroundColor: isaddMegamenuActive ? 'blue' : 'transparent' }}
                                    className={`px-6 items-center my-2 flex gap-2 ${isaddMegamenuActive ? 'activeLink' : ''}`}
                                >
                                    <NavLink to="/dash/megamenu" className='py-1 rounded-md'>
                                        Mega Menu
                                    </NavLink>
                                </li>
                                
                                <li style={{ backgroundColor: isaddOfflogo ? 'blue' : 'transparent' }}
                                    className={`px-6 items-center my-2 flex gap-2 ${isaddOfflogo ? 'activeLink' : ''}`}
                                >
                                    <NavLink to="/dash/offervlog" className='py-1 rounded-md'>
                                        OffVlog
                                    </NavLink>
                                </li>

                            </ul>
                        )} */}

                    </div>
                    <div>

                    </div>


                </div>
            </div >
        </div >
    );
};

export default Sidebar;
