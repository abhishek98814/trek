import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import "./List.css";


const AllTrek = () => {
    return (
        <div className=' h-screen px-8'>
            <div className=" overflow-x-auto">
                <div className="flex justify-between">
                    <h1 className="font-bold mb-12 pt-4 text-lg">All Trek</h1>
                    <div className="flex justify-end mb-4 relative">
                        <div className="relative flex items-center ">
                            <input type="text" className="border px-4 py-3 bg-gray-100 rounded-lg pl-10" placeholder="Search here" />
                            <CiSearch className="absolute  text-2xl left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  uppercase list-header dark:bg-gray-700 dark:text-gray-400">
                        <tr className='w-full gap-12'>
                            <th scope="cols" className="w-1/5 px-16 py-5">
                                Trek name
                            </th>
                            <th scope="cols" className="w-1/5 px-16 py-5">
                                Category
                            </th>
                            <th scope="cols" className="w-1/5 px-16 py-5">
                                Location
                            </th>
                            <th scope="cols" className="w-1/5 px-16 py-5">
                                Price
                            </th>
                            <th scope="cols" className="w-1/5 px-16 py-5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-16 py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className='px-12 justify-center'>
                                <span className='px-8 py-1 rounded-md border border-gray-400'>
                                    Expedition..
                                </span>
                            </td>
                            <td className="px-16 py-4">
                                Pokhara
                            </td>
                            <td className="px-16 py-4">
                                $2999
                            </td>
                            <td className=" py-4">
                                <span className="flex justify-center px-4 gap-2">
                                    <BsEye className='text-xl' />  <CiEdit className='text-xl' />    <AiOutlineDelete className='text-xl' />
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-16 py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className='px-12 justify-center'>
                                <span className='px-8 py-1 rounded-md border border-gray-400'>
                                    Expedition..
                                </span>
                            </td>
                            <td className="px-16 py-4">
                                Kathmandu
                            </td>
                            <td className="px-16 py-4">
                                $1999
                            </td>
                            <td className=" py-4">
                                <span className="flex justify-center px-4 gap-2">
                                    <BsEye className='text-xl' />  <CiEdit className='text-xl' />    <AiOutlineDelete className='text-xl' />
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className=" py-4 px-16 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className='px-12 justify-center'>
                                <span className='px-8 py-1 rounded-md border border-gray-400'>
                                    Climbing &
                                </span>
                            </td>
                            <td className="px-16 py-4">
                                Namche
                            </td>
                            <td className="px-16 py-4">
                                $99
                            </td>
                            <td className=" py-4">
                                <span className="flex justify-center px-4 gap-2">
                                    <BsEye className='text-xl' />  <CiEdit className='text-xl' />    <AiOutlineDelete className='text-xl' />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllTrek;
