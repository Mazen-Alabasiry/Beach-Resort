import React, { useContext } from 'react'
import Title from './Title'
import { RoomsContext } from '../ContextProvider'
import Room from './Room'
import LoadingData from './LoadingData'

function FeaturedRooms() {
    const { data } = useContext(RoomsContext)

    return (
        <div className='featured-rooms'>
            <Title title={'Featured Rooms'} />
            <div className='featured-rooms-center'>
                {data.loading ? <LoadingData /> : data.featuredRooms.map(room => <Room key={room.id} data={room} />)}
            </div>

        </div>
    )
}

export default FeaturedRooms