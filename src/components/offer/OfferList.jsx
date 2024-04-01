import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"
import "./offer.css";


export function OfferList() {
    return (
        <div className='my-6 h-screen px-8'>
            <div className=" overflow-x-auto">
                <div className="flex justify-between mb-4 items-center">

                    <h1 className="font-bold  text-lg">Offer List</h1>
                    {/* <Link to="/dash/createoffer" className="px-8 bg-blue-900 rounded-md py-3 text-white">Create Promo</Link> */}
                </div>
                <div className="flex justify-end mb-4 relative">
                    <div className="relative">
                        <input type="text" className="border px-4 py-2 bg-gray-100 rounded-lg pl-10" placeholder="Search here" />
                        <CiSearch className="absolute text-2xl left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>



                <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  uppercase list-header dark:bg-gray-700 dark:text-gray-400">
                        <tr className='w-full gap-8'>
                            <th scope="cols" className="w-1/8 text-center py-5">
                                Code
                            </th>
                            <th scope="cols" className="w-1/8 text-center py-5">
                                Discount Type
                            </th>
                            <th scope="cols" className="w-1/8 text-center py-5">
                                Discount Amount
                            </th>
                            <th scope="cols" className="w-1/8 text-center py-5">
                                Promo Type
                            </th>
                            <th scope="cols" className="w-1/8 text-center py-5">
                                Start Date
                            </th>
                            <th scope="cols" className="w-1/8 text-center py-5">
                                End Date
                            </th>
                            <th scope="cols" className="w-1/8 text-center py-5">
                                Status
                            </th>
                            <th scope="cols" className="w-1/8 text-center  py-5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="text-center py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                                1234
                            </th>
                            <td className=' text-center'>
                                Flat
                            </td>
                            <td className="text-center py-4">
                                Rs. 1234
                            </td>
                            <td className="text-center py-4">
                                Featured User
                            </td>
                            <td className="py-4 text-center">
                                Aug 6, 2024
                            </td>
                            <td className="text-center py-4">
                                oct 9, 2025
                            </td>
                            <td className="text-center py-4">
                                Active
                            </td>
                            <td className=" py-4">
                                <span className="flex justify-center  gap-2">
                                    <BsEye className='text-xl' />  <CiEdit className='text-xl' />    <AiOutlineDelete className='text-xl' />
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="text-center py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                                1234
                            </th>
                            <td className=' text-center'>
                                Flat
                            </td>
                            <td className="text-center py-4">
                                Rs. 1234
                            </td>
                            <td className="text-center py-4">
                                Featured User
                            </td>
                            <td className="py-4 text-center">
                                Aug 6, 2024
                            </td>
                            <td className="text-center py-4">
                                oct 9, 2025
                            </td>
                            <td className="text-center py-4">
                                Active
                            </td>
                            <td className=" py-4">
                                <span className="flex justify-center  gap-2">
                                    <BsEye className='text-xl' />  <CiEdit className='text-xl' />    <AiOutlineDelete className='text-xl' />
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="text-center py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                                1234
                            </th>
                            <td className=' text-center'>
                                Flat
                            </td>
                            <td className="text-center py-4">
                                Rs. 1234
                            </td>
                            <td className="text-center py-4">
                                Featured User
                            </td>
                            <td className="py-4 text-center">
                                Aug 6, 2024
                            </td>
                            <td className="text-center py-4">
                                oct 9, 2025
                            </td>
                            <td className="text-center py-4">
                                Active
                            </td>
                            <td className=" py-4">
                                <span className="flex justify-center  gap-2">
                                    <BsEye className='text-xl' />  <CiEdit className='text-xl' />    <AiOutlineDelete className='text-xl' />
                                </span>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="text-center py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                                1234
                            </th>
                            <td className=' text-center'>
                                Flat
                            </td>
                            <td className="text-center py-4">
                                Rs. 1234
                            </td>
                            <td className="text-center py-4">
                                Featured User
                            </td>
                            <td className="py-4 text-center">
                                Aug 6, 2024
                            </td>
                            <td className="text-center py-4">
                                oct 9, 2025
                            </td>
                            <td className="text-center py-4">
                                Active
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