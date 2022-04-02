/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react'
import { Link, useParams } from "react-router-dom";
import Banner from '../components/Banner';
import CustomHero from '../components/CustomHero';
import { RoomsContext } from '../ContextProvider';
import missingIMG from '../images/missing-image.jpg';
import defaultBcg from '../images/defaultBcg.jpeg';
function SingleRoom() {
    let { slug } = useParams();
    const { data } = useContext(RoomsContext);
    let currentRoom = {};
    data.rooms.forEach(room => {
        if (room.slug === slug) {
            let curr_room = room
            currentRoom = curr_room;
        }
    });

    return (
        <div className='single-room '>
            <CustomHero img={currentRoom.images && (currentRoom.images[0] || defaultBcg)}>
                <Banner
                    title={currentRoom.name + ' Room'}>
                    <Link to="/rooms/" className="btn-primary">
                        Back To Rooms
                    </Link>
                </Banner>
            </CustomHero>
            <div className='single-room-images'>
                {currentRoom.images && currentRoom.images.slice(1).map((image, index) => <img key={index} src={image || missingIMG} alt="room image" />)}
            </div>
            <div className='single-room-info'>
                <div className='desc'>
                    <h3>Details</h3>
                    <p>{currentRoom.description}</p>
                </div>
                <div className='info'>
                    <h3>Info</h3>
                    <h6> price:{'$' + currentRoom.price}</h6>
                    <h6> size:{'$' + currentRoom.size + ' SQFT'}</h6>
                    <h6> max capacity:{currentRoom.capacity + ' person'}</h6>
                    <h6> {currentRoom.pets ? 'pets allowed' : 'pets not allowed'}</h6>
                    <h6> {currentRoom.breakfast ? 'free breakfast included' : 'not included free breakfast '}</h6>
                </div>
            </div>
            <div className='room-extras'>
                <h6>extras</h6>
                <ul className='extras'>
                    {currentRoom.extras && currentRoom.extras.map((extra, index) => <li key={index}>- {extra}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default SingleRoom