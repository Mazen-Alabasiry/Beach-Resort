import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import RoomsContainer from '../components/RoomsContainer'
import Title from '../components/Title'

function Rooms() {
    return (
        <>
            <Hero sectionName={'defaultHero'}>
                <Banner
                    title="Our Rooms">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <div className='roomslist'>
                <Title title={'search rooms'} />
                <RoomsContainer />
            </div>

        </>
    )
}

export default Rooms