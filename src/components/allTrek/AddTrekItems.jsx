import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import axios from 'axios';
import Trekprice from './Trekprice';
import { IoIosGlobe } from "react-icons/io";
import { FaCalendarWeek } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { FaPeoplePulling } from "react-icons/fa6";
import { FaMountain } from "react-icons/fa";
import { MdNoMealsOuline } from "react-icons/md";
import { AiFillMacCommand } from "react-icons/ai";
import { MdOutlineSocialDistance } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { TbWashTemperature1 } from "react-icons/tb";
import { useParams } from 'react-router-dom';
import { TbCategoryFilled } from "react-icons/tb";



const AddtrekItems = () => {
    const [cityName, setCityName] = useState(false)
    const { id: locationId } = useParams();
    console.log(locationId)
    // useEffect(() => {
    //     console.log("Location ID:", locationId);
    // }, [locationId]);


    // const { menuTitleId, megaMenuSubtitleId } = useParams();
    // const [menuTitle, setMenuTitleId] = useState(menuTitleId);
    // const [megaMenuSubCategory, setTripTitle] = useState(megaMenuSubtitleId);


    const [locationdata, setLocationdata] = useState(locationId)
    console.log(locationdata)

    const [tripTitle, setTitle] = useState('');
    const [category, setCategory] = useState('')
    const [tripDays, setTripDays] = useState('')
    const [tripPrice, setTripPrice] = useState(0)
    const [tripDesc, setDescription] = useState('');
    const [tripOverView, setOverView] = useState('');
    const [tripHighlight, setTripHighlight] = useState(['']);
    const [itinerary, setItinerary] = useState([{ day: '', question: '', answer: '' }]);
    const [trekFaq, setTrekFaq] = useState([{ faqQuestion: '', faqAnswer: '' }]);
    const [priceIncludes, setPriceIncludes] = useState(['']);
    const [priceExcludes, setPriceExcludes] = useState(['']);
    const [condition, setCondition] = useState([{
        Country: '',
        Duration: '',
        Difficulty: '',
        Activity: '',
        MaxAltitude: '',
        BestSeason: '',
        Accommodation: '',
        Meals: '',
        Points: ''
    }]);

    const toggleCity = () => {
        setCityName(!cityName)
    }


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/trip/${id}`);
    //             const tripData = response.data;
    //             setTitle(tripData.tripTitle);
    //             setTripDays(tripData.tripDays);
    //             setTripPrice(tripData.tripPrice);
    //             setDescription(tripData.tripDesc);
    //             setOverView(tripData.tripOverView);
    //             setItinerary(tripData.itinerary);
    //             setTrekFaq(tripData.trekFaq);
    //             setPriceIncludes(tripData.priceIncludes);
    //             setPriceExcludes(tripData.priceExcludes);
    //             setCondition(tripData.condition);

    //         } catch (error) {
    //             console.error('Error fetching trip details:', error);
    //         }
    //     };

    //     if (id) {
    //         fetchData();
    //     }
    // }, [id]);

    const handleConditionChange = (e, index, field) => {
        const { value } = e.target;
        setCondition((prevCondition) => {
            const updatedCondition = [...prevCondition];
            updatedCondition[index][field] = value;
            return updatedCondition;
        });
    };
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['image', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
        ],
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'image', 'code-block',
        'list', 'bullet',
        'link',
    ];
    const handleChange = (content, delta, source, editor) => {
        setOverView(content);
    };
    const handleDayChange = (e, index) => {
        const { name, value } = e.target;
        const updatedItinerary = [...itinerary];
        updatedItinerary[index] = { ...updatedItinerary[index], [name]: value };
        setItinerary(updatedItinerary);
    };
    const handleAddDay = () => {
        setItinerary([...itinerary, { day: '', faqQuestion: '', faqAnswer: '' }]);
    };
    const handleFaqChange = (e, index) => {
        const { name, value } = e.target;
        setTrekFaq((prevFaq) => {
            const updatedFaq = [...prevFaq];
            updatedFaq[index][name] = value;
            return updatedFaq;
        });
    };
    const handleAddFaq = () => {
        setTrekFaq((prevFaq) => [
            ...prevFaq,
            { faqQuestion: '', faqAnswer: '' },
        ]);
    };
    const tripHighlightChange = (e, index) => {
        const { value } = e.target;
        setTripHighlight((prevTripHighlight) => {
            const updatedTripHighlight = [...prevTripHighlight];
            updatedTripHighlight[index] = value;
            return updatedTripHighlight
        });
    };
    const handleTripHighlight = () => {
        const lastHighlight = tripHighlight[tripHighlight.length - 1];
        if (lastHighlight !== '') {
            setTripHighlight((prevTripHighlight) => [...prevTripHighlight, '']);
        }
    };
    const handlePriceIncludeChange = (e, index) => {
        const { value } = e.target;
        setPriceIncludes((prevPriceIncludes) => {
            const updatedPriceIncludes = [...prevPriceIncludes];
            updatedPriceIncludes[index] = value;
            return updatedPriceIncludes;
        });
    };
    const handleAddPriceInclude = () => {
        const lastInclude = priceIncludes[priceIncludes.length - 1];
        if (lastInclude !== '') {
            setPriceIncludes((prevPriceIncludes) => [...prevPriceIncludes, '']);
        }
    };
    const handlePriceExcludeChange = (e, index) => {
        const { value } = e.target;
        setPriceExcludes((prevPriceExcludes) => {
            const updatedPriceExcludes = [...prevPriceExcludes];
            updatedPriceExcludes[index] = value;
            return updatedPriceExcludes;
        });
    };
    const handleAddPriceExclude = () => {
        setPriceExcludes((prevPriceExcludes) => [...prevPriceExcludes, '']);
    };
    // const handleUpdate = async (e, menuTitleId, megaMenuSubtitleId) => {
    //     e.preventDefault();
    //     try {
    //         if (id) {
    //             const response = await axios.patch(`http://localhost:8080/trip/${_id}`, {
    //                 tripTitle,
    //                 tripDesc,
    //                 tripDays,
    //                 condition,
    //                 tripPrice,
    //                 tripOverView,
    //                 tripHighlight,
    //                 Itinerary: itinerary,
    //                 trekFaq,
    //                 priceIncludes,
    //                 priceExcludes,
    //                 menuTitleId,
    //                 megaMenuSubtitleId
    //             });
    //             console.log('Updated data:', response.data);
    //         } else {
    //             console.error('Cannot update data without an ID');
    //         }

    //         setTitle('');
    //         setDescription('');
    //         setOverView('');
    //         setTripDays('');
    //         setTripPrice('');
    //         setTripHighlight(['']);
    //         setPriceIncludes(['']);
    //         setPriceExcludes(['']);
    //         setItinerary([{ day: '', question: '', answer: '' }]);
    //         setTrekFaq([{ faqAnswer: '', faqQuestion: '' }]);

    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // const getData = async () => {
    //     try {
    //         const resData = await axios.get("http://localhost:8080/trip")
    //         console.log(resData.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     getData()
    // }, [])


    const handleSubmit = async (e, locationId) => {
        e.preventDefault();

        if (!tripTitle || !tripDesc || !tripDays || !tripPrice || !tripOverView || !itinerary || !trekFaq || !priceIncludes || !priceExcludes || !locationdata) {
            console.error('One or more required fields are missing.');
            return;
        }

        try {
            const requestData = {
                tripTitle,
                tripDesc,
                tripDays,
                condition,
                tripPrice,
                tripOverView,
                tripHighlight,
                Itinerary: itinerary,
                trekFaq,
                priceIncludes,
                priceExcludes,
                locationdata
            };

            const response = await axios.post(`http://localhost:8080/trip/:${locationId}`, requestData);

            console.log("Response data:", response.data);


        } catch (err) {
            console.error("Error:", err);
        }
    };





    return (
        <div className='mx-8'>
            <form >
                <div className='flex rounded gap-2 my-4'>
                    <div className='w-3/4'>
                        <h2 className='text py-1 font-semibold'>Trek Title</h2>
                        <input type="text"
                            value={tripTitle}
                            onChange={(e) => setTitle(e.target.value)}
                            className='border border-indigo-600 py-1 px-4 w-full gray-500 rounded'
                            placeholder='Everest base camp trek for 14 days 15 night....'
                            required
                        />
                    </div>
                    <div className='w-1/3'>
                        <h2 className='text py-1 font-semibold'>Trek Duration</h2>
                        <input
                            type="text"
                            className='border border-indigo-600 px-4 gray-500 w-full rounded py-1'
                            value={tripDays}
                            onChange={(e) => setTripDays(e.target.value)}
                            placeholder='14 days 15 night'
                            required
                        />
                    </div>
                    <div className='w-1/3'>
                        <h2 className='py-1 text-md font-semibold'>Price</h2>
                        <input
                            type="number"
                            className='border border-indigo-600 px-4 gray-500 rounded py-1 w-full'
                            value={tripPrice}
                            onChange={(e) => setTripPrice(e.target.value)}
                            placeholder='$4500.00'
                            required
                        />
                    </div>
                    <div className='w-1/3'>
                        <h2 className='py-1 text-md font-semibold'>Category</h2>
                        <input
                            type="text"
                            className='border border-indigo-600 px-4 gray-500 rounded py-1 w-full'
                            // value={category}
                            // onChange={(e) => setCategory(e.target.value)}
                            placeholder='Type a category'
                            required
                        />
                    </div>
                </div>
                <div className='my-4'>
                    <h3 className='text py-1 font-semibold'>Conditions</h3>
                    {Array.isArray(condition) && condition.map((cond, index) => (
                        <div key={index} className='grid mt-2 w-full px-4 py-4 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 bg-gray-100 rounded'>
                            <div className='flex gap-2'>
                                <span className='pt-3'>
                                    <IoIosGlobe className='text-3xl text-gray-500' />
                                </span>
                                <span>
                                    <h3 className='text-gray-500'>Country</h3>

                                    <span className='flex gap-2'>
                                        <input
                                            type='text'
                                            value={cond.Country}
                                            onChange={(e) => handleConditionChange(e, index, 'Country')}
                                            className='border border-indigo-600 px-4 rounded py-1 w-full'
                                            placeholder='nepal'
                                            required
                                        />
                                        {/* <MdArrowDropDown className='text-4xl' onClick={toggleCity} /> */}
                                    </span>


                                    {cityName && (
                                        <span>
                                            <h3 className='text-gray-500'>City</h3>
                                            <input
                                                type='text'
                                                value={cond.City}
                                                onChange={(e) => handleConditionChange(e, index, 'City')}
                                                className='border border-indigo-600  rounded py-0'
                                                placeholder='Kathmandu'
                                                required
                                            />
                                        </span>
                                    )}
                                </span>

                            </div>
                            {/* <div className='flex gap-2'>
                                <span className='pt-4'>
                                    <TbCategoryFilled className='text-2xl text-gray-500' />
                                </span>
                                <span>
                                    <h3 className='text-gray-500'>Category</h3>
                                    <input
                                        type="text"
                                        className='border border-indigo-600 px-4 gray-500 rounded py-2 w-full'
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder='Type a category'
                                        required
                                    />
                                </span>
                            </div> */}

                            <div className='flex gap-2'>
                                <span className='pt-4'>
                                    <FaCalendarWeek className='text-2xl text-gray-500' />
                                </span>
                                <span>
                                    <h3 className='text-gray-500'>Duration</h3>
                                    <input
                                        type='text'
                                        value={cond.Duration}
                                        onChange={(e) => handleConditionChange(e, index, 'Duration')}
                                        className='border border-indigo-600 rounded py-1 px-4'
                                        placeholder='9 Days'
                                        required
                                    />
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='pt-3'>
                                    <FaTimeline className='text-3xl text-gray-500' required />
                                </span>
                                <span>
                                    <h3 className='text-gray-500'>Difficlty</h3>
                                    <input
                                        type='text'
                                        value={cond.Difficulty}
                                        onChange={(e) => handleConditionChange(e, index, 'Difficulty')}
                                        className='border border-indigo-600 px-4 rounded py-1 w-full'
                                        placeholder='Demanding?'
                                        required
                                    />
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='pt-2'>
                                    <FaPeoplePulling className='text-3xl text-gray-500' required />
                                </span>
                                <span>
                                    <h3 className='text-gray-500'>Activity</h3>
                                    <input
                                        type='text'
                                        value={cond.Activity}
                                        onChange={(e) => handleConditionChange(e, index, 'Activity')}
                                        className='border border-indigo-600 px-4 rounded py-1 w-full'
                                        placeholder='Trekking/Hiking'
                                        required
                                    />
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='pt-3'>
                                    <FaMountain className='text-2xl text-gray-500' required />
                                </span>
                                <span>
                                    <h3 className='text-gray-500'>Max. Altitude</h3>
                                    <input
                                        type='text'
                                        value={cond.MaxAltitude}
                                        onChange={(e) => handleConditionChange(e, index, 'MaxAltitude')}
                                        className='border border-indigo-600 px-4 rounded py-1 w-full'
                                        placeholder='3,860 m /12,664 ft'
                                        required
                                    />
                                </span>
                            </div>

                            <div className='flex gap-2'>
                                <span className='pt-3'>
                                    <TbWashTemperature1 className="text-3xl text-gray-500" />
                                </span>
                                <span>
                                    <h3 className='text-gray-600'>Best Season</h3>
                                    <input
                                        type='text'
                                        value={cond.BestSeason}
                                        onChange={(e) => handleConditionChange(e, index, 'BestSeason')}
                                        className='border border-indigo-600 px-4 rounded py-1 w-full'
                                        placeholder='Jan-Jun, Sep-Dec'
                                        required
                                    />
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='pt-2'>
                                    <AiFillMacCommand className="text-3xl text-gray-500" required />
                                </span>
                                <span>
                                    <h3 className='text-gray-600'>Accommodation</h3>
                                    <input
                                        type='text'
                                        value={cond.Accommodation}
                                        onChange={(e) => handleConditionChange(e, index, 'Accommodation')}
                                        className='border border-indigo-600 px-4 rounded py-1 w-full'
                                        placeholder='Tea House & Hotel?'
                                        required
                                    />
                                </span>
                            </div>

                            <div className='flex gap-2'>
                                <span className='pt-2'>
                                    <MdNoMealsOuline className="text-3xl text-gray-500" />
                                </span>
                                <span>
                                    <h3 className='text-gray-600'> Meals</h3>
                                    <input
                                        type='text'
                                        value={cond.Meals}
                                        onChange={(e) => handleConditionChange(e, index, 'Meals')}
                                        className='border border-indigo-600 px-4 rounded py-1 w-full'
                                        placeholder='Included ?'
                                        required
                                    />
                                </span>
                            </div>


                            <div className='flex gap-2'>
                                <span className='pt-2'>
                                    <MdOutlineSocialDistance className="text-3xl text-gray-500" />
                                </span>
                                <span>
                                    <h3 className='text-gray-600'>Start/End Point</h3>
                                    <input
                                        type='text'
                                        value={cond.Points}
                                        onChange={(e) => handleConditionChange(e, index, 'Points')}
                                        className='border border-indigo-600 px-4 rounded py-1 w-full'
                                        placeholder='kathmandu..../..'
                                        required
                                    />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-4'>
                    <h3 className='text-md font-bold'>Short Description</h3>
                    <textarea
                        type='text'
                        value={tripDesc}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border w-full border-indigo-600 rounded px-4 py-1'
                        placeholder='In this short and less and strenuous trek, walk in the foothills of Mt. Everest and experience the amazing views of the giant mountain surrounding the region...'
                        required
                    />

                    <div className='mt-4'>
                        <h3 className='text-md font-bold'>HighLight</h3>
                        <div className='w-full  gap-2 '>
                            {Array.isArray(tripHighlight) && tripHighlight.map((highlight, index) => (
                                <div key={index} className='my-2 w-full'>
                                    <input
                                        type='text'
                                        value={highlight}
                                        onChange={(e) => tripHighlightChange(e, index)}
                                        className='border border-indigo-600 rounded w-full py-2 px-4'
                                        placeholder='Write the highlight here...'
                                        required
                                    />
                                </div>
                            ))}

                            <div>
                                <button type='button' style={{ whiteSpace: 'nowrap' }} onClick={handleTripHighlight} className='bg-blue-500 px-2 py-2 mt-2 rounded text-white'>
                                    Add More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    {itinerary.map((day, index) => (
                        <div key={index}>

                            <div className='w-full pt-10'>
                                <h3 className='text-md font-bold'>Itinerary Title</h3>
                                <input
                                    type='text'
                                    name='question'
                                    value={day.question}
                                    onChange={(e) => handleDayChange(e, index)}
                                    className='border border-indigo-600 w-full px-4 py-2 rounded'
                                    placeholder={`Days ${index + 1} : write Iternary title for day${index + 1}...`}
                                    required
                                />
                            </div>
                            <div className='w-full my-4'>
                                <h3 className='font-semibold'>Iternary Overview</h3>
                                <ReactQuill
                                    theme="snow"
                                    value={day.answer}
                                    onChange={(content) => handleDayChange({ target: { name: 'answer', value: content } }, index)}
                                    modules={modules}
                                    formats={formats}
                                    placeholder='Write the Answer...'
                                    style={{ maxHeight: '30vh', height: '20vh' }}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <button type='button' onClick={handleAddDay} className='bg-blue-500 px-4 py-1 mt-12 rounded text-white'>
                        Add More
                    </button>
                </div>

                <div className='mt-4 w-full '>
                    <h3 className='text-md font-bold'>Trek OverView</h3>
                    <ReactQuill
                        theme="snow"
                        value={tripOverView}
                        onChange={handleChange}
                        modules={modules}
                        formats={formats}
                        style={{ height: '40vh', borderRadius: '12px', borderColor: '#4f46e5' }}
                        placeholder='Write the Overview of trek....'
                        required
                    />
                </div>

                <div className='mt-14'>
                    <h3 className='text-md py-1 font-bold'>Trek FAQs</h3>
                    {trekFaq.map((faq, index) => (
                        <div key={index}>
                            <div>
                                <h3 className='font-semibold'>Question</h3>
                                <input
                                    type='text'
                                    name='faqQuestion'
                                    value={faq.faqQuestion}
                                    onChange={(e) => handleFaqChange(e, index)}
                                    className='border border-indigo-600 w-full py-1 px-4 rounded'
                                    placeholder='write the title of faq...'
                                    required
                                />
                            </div>
                            <div className='my-2'>
                                <h3 className='font-semibold'>Answer</h3>
                                <textarea
                                    type='text'
                                    name='faqAnswer'
                                    value={faq.faqAnswer}
                                    onChange={(e) => handleFaqChange(e, index)}
                                    className='border border-indigo-600 w-full py-10 px-4 rounded'
                                    placeholder='write the overview of faq....'
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <button type='button' onClick={handleAddFaq} className='bg-blue-500  px-4 rounded text-white'>
                        Add More
                    </button>
                </div>

                <div className='mt-2'>
                    <h3 className=' text-md py-1 font-bold'>Price Includes</h3>

                    <div className=' flex  gap-2'>
                        <div className='w-full'>
                            {Array.isArray(priceIncludes) && priceIncludes.map((include, index) => (
                                <div key={index} className='w-full flex gap-4 py-2'>
                                    <input
                                        type='text'
                                        value={include}
                                        onChange={(e) => handlePriceIncludeChange(e, index)}
                                        className='border border-indigo-600 px-4 w-full py-1 rounded'
                                        placeholder='priceInclude for trek...'
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div className=' mt-2'>
                            <button type='button' onClick={handleAddPriceInclude} style={{ whiteSpace: 'nowrap' }} className='bg-blue-500 px-2  py-1 rounded text-white'>
                                Add More
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <h3 className=' text-md py-1 font-bold'>Price Includes</h3>

                    <div className=' flex  gap-2'>
                        <div className='w-full  '>

                            {Array.isArray(priceExcludes) && priceExcludes.map((exclude, index) => (
                                <div key={index} className='w-full'>
                                    <Trekprice
                                        type='text'
                                        value={exclude}
                                        onChange={(e) => handlePriceExcludeChange(e, index)}
                                        className='border'
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div className=' mt-2'>
                            <button type='button' onClick={handleAddPriceExclude} style={{ whiteSpace: 'nowrap' }} className='bg-blue-500 px-2  py-1 rounded text-white'>
                                Add More
                            </button>
                        </div>
                    </div>
                </div>


                <div className='my-2'>
                    <button type='submit' className='bg-blue-500 px-2 w-full py-1 mt-2 rounded text-white'>
                        {/* {buttonName} */}
                        submit
                    </button>
                </div>
            </form>

        </div>
    );
};

export default AddtrekItems;


