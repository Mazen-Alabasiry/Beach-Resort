import React, { useContext } from 'react'
import { RoomsContext } from '../ContextProvider'
import LoadingData from './LoadingData';
import NoRoomsFound from './NoRoomsFound';
import Room from './Room';

function RoomsList() {
    const context = useContext(RoomsContext);
    const { data } = context;
    return (
        <div className={'roomslist-center'}>
            {data.sortedRooms.length > 0 ? data.sortedRooms.map(room => <Room key={room.id} location='rooms' data={room} />) :
                data.loading ? <LoadingData /> :
                    data.type === 'all' ? data.rooms.map(room => <Room key={room.id} location='rooms' data={room} />) :
                        <NoRoomsFound />}
        </div>
    )
}

export default RoomsList