import React from 'react'
import { Link } from 'react-router-dom'
import defaultBcg from '../images/defaultBcg.jpeg';
function Room({ data, location }) {

    return (
        <div className='room'>
            <div className='img-container'>
                <img src={data.images[0] || defaultBcg} alt="" />
                <div className='price-top'>
                    <h6>{'$' + data.price}</h6>
                    <span>per night</span>
                </div>
                <Link className='room-link btn-primary' to={location === 'rooms' ? `single-room/${data.slug}` : `rooms/single-room/${data.slug}`}>Show Room</Link>
            </div>
            <div className='room-info'>{data.name}</div>
        </div>
    )
}

export default Room