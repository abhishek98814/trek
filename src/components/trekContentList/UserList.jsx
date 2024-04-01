import React from 'react';

import { CiSearch } from "react-icons/ci";
import "./List.css"

const userData = [
    {
        fullName: 'Abhishek',
        address: 'Kathmandu',
        email: 'aj7154264@gmail.com',
        contact: '9863897870',
        remarks: 'Hey I wanna say..'
    },
    {
        fullName: 'Abhishek',
        address: 'Kathmandu',
        email: 'aj7154264@gmail.com',
        contact: '9863897870',
        remarks: 'Hey I wanna say..'
    },
];

function UserList() {
    return (
        <div className='my-4 px-8 h-screen'>
            <div className="overflow-x-auto">
                <div className="flex justify-between">
                    <h1 className="font-bold mb-12 text-center text-lg">User List</h1>
                    <div className="flex justify-end mb-4 relative">
                        <div className="relative flex items-center ">
                            <input type="text" className="border px-4 py-3 bg-gray-100 rounded-lg pl-10" placeholder="Search here" />
                            <CiSearch className="absolute  text-2xl left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase list-header dark:bg-gray-700 dark:text-gray-400">
                        <tr className='w-full gap-4'>
                            <th scope="cols" className="w-1/4 text-center py-5">
                                Username
                            </th>
                            <th scope="cols" className="w-1/4 text-center py-5">
                                Address
                            </th>
                            <th scope="cols" className="w-1/4 text-center py-5">
                                Email
                            </th>
                            <th scope="cols" className="w-1/4 text-center py-5">
                                Contact
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className='text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                    {user.fullName}
                                </td>
                                <td className='text-center py-4'>
                                    {/* <span className='text-center py-1 px-6 rounded-md border border-gray-400'> */}
                                    {user.address}
                                    {/* </span> */}
                                </td>
                                <td className='text-center py-4'>
                                    {user.email}
                                </td>
                                <td className='text-center py-4'>
                                    {user.contact}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;
