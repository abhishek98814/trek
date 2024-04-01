import React from 'react'
import Headers from './Header'
import Sidebar from './Sidebar'
// import { Outlet } from 'react-router-dom'
import MainDash from '../mainPage/MainPage'
import { Outlet, useLocation } from 'react-router-dom';
import './sidebar.css'



const Layout = () => {

    const location = useLocation();
    const isDashboard = location.pathname === '/';
    return (
        <div className=' h-screen'>

            <div className='flex flex-col' style={{ width: '100%' }}>
                <Headers />
            </div>

            <hr />
            <div className='flex w-full'>
                <div className='w-1/6'>
                    <Sidebar />
                </div>



                <div className=' mainpage-color  mt-24 w-5/6   overflow-hidden' >
                    <div className=''>
                        {isDashboard && (

                            <div className='w-full '>
                                <MainDash />
                            </div>
                        )}
                    </div>
                    <div className=' pt-50'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Layout