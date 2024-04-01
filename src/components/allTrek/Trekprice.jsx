import React from 'react'

const Trekprice = ({ value, onChange }) => {
    return (
        <div className='w-full my-1'>
            <input
                type='text'
                value={value}
                onChange={onChange}
                className='border border-indigo-600 w-full rounded px-4 py-1'
                placeholder='Price Exclude'
                required
            />
        </div>
    )
}

export default Trekprice