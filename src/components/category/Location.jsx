import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { countries } from 'countries-list';
import axios from 'axios';

const Location = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [countryName, setCountryName] = useState("");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

    const countryNames = Object.keys(countries);
    const limitedCountryNames = countryNames.slice(0, 249);

    const handleCountryChange = (countryCode) => {
        setSelectedCountry(countryCode);
        setCountryName(countries[countryCode].name);
        setShowDropdown(false);
    };

    const handleSearch = () => {
        setShowDropdown(true);
    };

    const filteredCountryNames = limitedCountryNames.filter(countryCode => {
        const countryName = countries[countryCode].name.toLowerCase();
        return countryName.includes(searchQuery.toLowerCase());
    });


    return (
        <div className='my-8 mx-6 h-screen rounded-lg bg-white'>
            <h1 className='pt-4 px-6 font-semibold text-2xl text-black'>Location</h1>
            <form >
                <div className='flex my-4 justify-around w-full'>
                    <div className='w-2/4 flex mx-6 gap-16'>
                        <p style={{ whiteSpace: "nowrap" }} className='font-semibold items-center my-3 text-gray-600'>
                            Trek Location
                        </p>
                        <div className='relative w-full'>
                            <div className='relative' onClick={() => setShowDropdown(!showDropdown)}>
                                <input
                                    type="text"
                                    className='rounded-md w-full py-3 px-2 border-gray-500 border pl-10'
                                    value={selectedCountry ? countries[selectedCountry].name : ''}
                                    readOnly
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <MdOutlineKeyboardArrowDown className='text-4xl cursor-pointer' />
                                </div>
                            </div>
                            {showDropdown && (
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Search country..."
                                        className="rounded-md w-full py-2 px-2 mt-2 border-gray-500 border"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <ul className="absolute w-full mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg">
                                        {filteredCountryNames.map((countryCode, index) => (
                                            <li
                                                key={index}
                                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                                onClick={() => handleCountryChange(countryCode)}
                                            >
                                                {countries[countryCode].name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-2/4 flex gap-16 mx-4">
                        <p style={{ whiteSpace: "nowrap" }} className='font-semibold px-2 items-center my-3 text-gray-600'>
                            Trek Category
                        </p>
                        <div className='relative w-full'>
                            <input
                                type="text"
                                className='rounded-md w-full py-3 px-2 border-gray-500 border pl-10 cursor-pointer'
                                placeholder="Enter a category"
                                value={categories.join(', ')}
                                onChange={(e) => setCategories(e.target.value.split(',').map(category => category.trim()))}
                            />
                        </div>
                    </div>
                </div>
                <div className='mx-6 right-0 text-end my-12'>
                    <button type="submit" className='rounded-md py-3 px-6 mt-8 text-white font-medium bg-violet-950'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Location;






