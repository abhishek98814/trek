import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import "./List.css";


export function Bookings() {
    return (
        <div className='my-6 h-screen px-8'>
            <div className=" overflow-x-auto">
                <div className="flex justify-between">
                    <h1 className="font-bold mb-12 pt-4 text-lg">Booking</h1>
                    <div className="flex justify-end mb-4 relative">
                        <div className="relative flex items-center ">
                            <input type="text" className="border px-4 py-3 bg-gray-100 rounded-lg pl-10" placeholder="Search here" />
                            <CiSearch className="absolute  text-2xl left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  uppercase list-header dark:bg-gray-700 dark:text-gray-400">
                        <tr className='w-full gap-8'>
                            <th scope="cols" className="w-1/7 text-center py-5">
                                Trek name
                            </th>
                            <th scope="cols" className="w-1/7 text-center py-5">
                                Phone Number
                            </th>
                            <th scope="cols" className="w-1/7 text-center py-5">
                                Email
                            </th>
                            <th scope="cols" className="w-1/7 text-center py-5">
                                Trek Name
                            </th>
                            <th scope="cols" className="w-1/7 text-center py-5">
                                No. of person
                            </th>
                            <th scope="cols" className="w-1/7 text-center py-5">
                                Date
                            </th>
                            <th scope="cols" className="w-1/7 text-center  py-5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="text-center py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className=' text-center'>
                                <span className='text-center py-1 rounded-md border-gray-400'>
                                    9863897870
                                </span>
                            </td>
                            <td className="text-center py-4">
                                aj7154264@gmail.com
                            </td>
                            <td className="text-center py-4">
                                Trek in kaligandaki
                            </td>
                            <td className="py-4 text-center">
                                10
                            </td>
                            <td className="text-center py-4">
                                2024-04-08
                            </td>
                            <td className=" py-4">
                                <span className="flex justify-center  gap-2">
                                    <BsEye className='text-xl' />  <CiEdit className='text-xl' />    <AiOutlineDelete className='text-xl' />
                                </span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}