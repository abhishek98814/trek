import React from 'react';
import { MdOutlineFactCheck } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

const MainPage = () => {
    return (
        <div className='my-4' style={{ zIndex: 1 }}>
            <div className="mx-4">
                <div className=" w-full flex gap-4 ">
                    <div className="w-1/4 py-4 bg-white border rounded-md border-gray-400 border-solid ">
                        <p className='px-6 py-2 gap-1 flex items-center font-semibold text-green-600'>
                            <MdOutlineFactCheck className='text-xl' />
                            Total Earning</p>
                        <p className='flex justify-between px-6 pt-4 font-semibold '>
                            <span className='text-green-400 text-2xl'>
                                19000
                            </span>
                            <span className='text-cyan-400 flex items-center'>
                                < FaArrowTrendUp />
                                +5.93%
                            </span>
                        </p>
                    </div>
                    <div className="w-1/4 py-4 bg-white border text-yellow-500 rounded-md border-gray-50 border-solid shadow-md">
                        <p className='px-6 gap-1 flex items-center py-2 font-semibold'>
                            <FaRegNoteSticky className='text-xl' />
                            Total Treks</p>
                        <p className='flex justify-between px-6 pt-4 font-semibold'>
                            <span className='font-semibold text-2xl'>
                                19000
                            </span>
                            <span className='font-semibold flex items-center text-cyan-400'>
                                < FaArrowTrendUp />
                                +5.93%
                            </span>
                        </p>
                    </div>

                    <div className="w-1/4 bg-white border rounded-md border-gray-50 border-solid shadow-md">

                        <div className='px-16 py-2 text-indigo-800'>
                            <p className='py-4 flex gap-1 items-center font-semibold'>
                                <FaDollarSign />
                                <span style={{ whiteSpace: "nowrap" }}>
                                    Total Booking
                                </span>
                            </p>
                            <p className=' font-bold pt-2 text-2xl'>Rs. 1,2000</p>
                        </div>
                    </div>
                    <div className="w-1/4 py-2 bg-white border rounded-md border-gray-50 shadow-md">
                        <div className='text-center'>
                            <p className='py-4 px-16 gap-1  flex font-semibold text-indigo-800' >
                                <MdOutlinePeopleAlt className='text-2xl' />
                                <span style={{ whiteSpace: "nowrap" }}>
                                    Total Inquiry
                                </span>
                            </p>
                            <p className='pt-2 font-bold text-indigo-800 text-2xl'>2000</p>
                        </div>
                    </div>

                </div>
                <div className="w-full flex gap-2">
                    <div className="w-4/6 my-4">
                        <div className='flex justify-between'>
                            <div>
                                <button className='bg-violet-950 rounded-md px-4 py-1 text-white text-semibold shadow-md'>New</button>
                            </div>
                            <div className='flex gap-4'>
                                <button className='border border-violet-950  border-solid rounded-md px-4 py-0 text-violet-950 font-semibold shadow-md'>Trek</button>
                                <button className='border border-violet-950  border-solid rounded-md px-4 py-0 text-violet-950 font-semibold shadow-md'>Booking</button>
                                <button className='border border-violet-950  border-solid rounded-md px-4 py-0 text-violet-950 font-semibold shadow-md'>Enquiry</button>
                            </div>
                        </div>

                        <div className='my-3'>
                            {/* ABHSIHERK */}
                        </div>


                    </div>
                    <div className="w-2/6 h-screen bg-white mx-0 my-2 rounded-md shadow-md">
                        <div className='px-4'>
                            <h3 className="font-semibold text-lg my-4">Activity</h3>
                            <hr />
                            <ul>
                                <li className='py-2 ml-4 list-disc relative'>
                                    <div className="">
                                        <span className='text-gray-400 font-semibold text-sm'>
                                            I believe c++, python, rust , kotlin, java and some assembly language,
                                        </span>
                                        <span className='font-semibold text-gray-700 text-sm'> is future of next world</span>

                                    </div>
                                    <div className="flex gap-4 pt-2 pb-3">
                                        <span className="font- text-xs text-gray-400">
                                            Feb 12,
                                        </span>
                                        <span className='text-green-400 text-xs font-semibold'>
                                            View All
                                        </span>
                                    </div>

                                </li>
                                <li className='py-2 ml-4 list-disc relative'>
                                    <div className="">
                                        <span className='text-gray-400 font-semibold text-sm'>
                                            I believe c++, python, rust , kotlin, java and some assembly language,
                                        </span>
                                        <span className='font-semibold text-gray-700 text-sm'> is future of next world</span>

                                    </div>
                                    <div className="flex gap-4 pt-2 pb-3">
                                        <span className="font- text-xs text-gray-400">
                                            Feb 12,
                                        </span>
                                        <span className='text-green-400 text-xs font-semibold'>
                                            View All
                                        </span>
                                    </div>

                                </li>
                                <li className='py-2 ml-4 list-disc relative'>
                                    <div className="">
                                        <span className='text-gray-400 font-semibold text-sm'>
                                            I believe c++, python, rust , kotlin, java and some assembly language,
                                        </span>
                                        <span className='font-semibold text-gray-700 text-sm'> is future of next world</span>

                                    </div>
                                    <div className="flex gap-4 pt-2 pb-3">
                                        <span className="font- text-xs text-gray-400">
                                            Feb 12,
                                        </span>
                                        <span className='text-green-400 text-xs font-semibold'>
                                            View All
                                        </span>
                                    </div>

                                </li>
                                <li className='py-2 ml-4 list-disc relative'>
                                    <div className="">
                                        <span className='text-gray-400 font-semibold text-sm'>
                                            I believe c++, python, rust , kotlin, java and some assembly language,
                                        </span>
                                        <span className='font-semibold text-gray-700 text-sm'> is future of next world</span>

                                    </div>
                                    <div className="flex gap-4 pt-2 pb-3">
                                        <span className="font- text-xs text-gray-400">
                                            Feb 12,
                                        </span>
                                        <span className='text-green-400 text-xs font-semibold'>
                                            View All
                                        </span>
                                    </div>

                                </li>
                                <li className='py-2 ml-4 list-disc relative'>
                                    <div className="">
                                        <span className='text-gray-400 font-semibold text-sm'>
                                            I believe c++, python, rust , kotlin, java and some assembly language,
                                        </span>
                                        <span className='font-semibold text-gray-700 text-sm'> is future of next world</span>

                                    </div>
                                    <div className="flex gap-4 pt-2 pb-3">
                                        <span className="font- text-xs text-gray-400">
                                            Feb 12,
                                        </span>
                                        <span className='text-green-400 text-xs font-semibold'>
                                            View All
                                        </span>
                                    </div>

                                </li>
                                <li className='py-2 ml-4 list-disc relative'>
                                    <div className="">
                                        <span className='text-gray-400 font-semibold text-sm'>
                                            I believe c++, python, rust , kotlin, java and some assembly language,
                                        </span>
                                        <span className='font-semibold text-gray-700 text-sm'>
                                            is future of next world
                                        </span>
                                    </div>
                                    <div className="flex gap-4 pt-2 pb-3">
                                        <span className="font- text-xs text-gray-400">
                                            Feb 12,
                                        </span>
                                        <span className='text-green-400 text-xs font-semibold'>
                                            View All
                                        </span>
                                    </div>

                                </li>


                                <hr className='absolute top-1/2 left-0 border-l border-green-400 border-dashed h-0 transform -translate-y-1/2 rotate-90' style={{ width: '10px' }} />
                            </ul>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainPage;
