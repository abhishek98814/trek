import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';

const Bookingcancellation = () => {
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
    return (
        <div>
            <div className='mx-6 h-screen bg-white rounded-md my-4'>
                <h1 className='font-semibold text-lg pt-2 px-8'>Booking and Cancelation</h1>
                <div className='w-full bg-white my-4'>
                    <ReactQuill
                        theme="snow"
                        // value={day.answer}
                        // onChange={(content) => handleDayChange({ target: { name: 'answer', value: content } }, index)}
                        modules={modules}
                        formats={formats}
                        placeholder='Write the Answer...'
                        style={{ maxHeight: '80vh', height: '50vh' }}
                        className='bg-white  rounded-md mx-8'
                        required
                    />
                </div>
                <div className='flex justify-end  pt-8 mx-8'>
                    <button className='bg-blue-900 absolute py-2 px-8 text-white rounded-md my-4'>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Bookingcancellation