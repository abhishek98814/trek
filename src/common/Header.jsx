import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '../mainPage/icons';
// import { notificationContext } from '../context/Notification';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showSidebar, setShowSidebar] = useState(false);
    // const inquiry = useContext(notificationContext)
    const [showDropdown, setShowDropdown] = useState(false);


    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleString();
    };

    return (
        <>
            <div className='bg-white fixed w-screen opacity-100 z-1  py-4' style={{ zIndex: 2 }} >
                <header className="flex  items-center mx-8" >
                    <div className='w-1/5'>
                        <Link to={'/'} className="flex items-center gap-1">

                            <span className="font-bold text-xl" style={{ whiteSpace: "nowrap" }}>Trek Hub</span>
                        </Link>
                    </div>
                    <div className='flex ml-4  w-3/5 gap-2 '>
                        <input
                            type="text"
                            className='border border-gray-300 border-solid bored-line-2px rounded-md w-full py-2 px-4 text-black placeholder-gray-500'
                            placeholder="Search here"
                        />
                    </div>

                    <div className="w-1/5">
                        <div className='flex gap-6 ml-32'>
                            <span className='cursor-pointer text-gray-700 rounded-xl mt-2'>
                                <Icons.AiFillMessage className='text-xl ' />
                            </span>

                            <span className='text-gray-700 cursor-pointer rounded-xl mt-2'>
                                <Icons.IoIosNotifications className='text-2xl' />
                            </span>

                            <span className='text-gray-700 cursor-pointer rounded-xl'>
                                <FaUser className='text-xl mt-2' />
                            </span>

                        </div>

                    </div>

                    {/* Abhishek */}
                </header>
            </div>

        </>
    )
}

export default Header;
