import React from 'react'

const Card = (props:any) => {
    return (
        <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>{props.title}</p>
            <p className='text-gray-400 mt-2'>{props.subtitle}</p>
        </div>
    )
}

export default Card