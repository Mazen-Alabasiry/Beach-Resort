import React from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
    let services = [
        {
            id: 1,
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            id: 2,
            icon: <FaHiking />,
            title: "Endless Hiking",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            id: 3,
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            id: 4,
            icon: <FaBeer />,
            title: "Strongest Beer",
            info:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }
    ]
    return (
        <section className='services'>
            <Title title={'Services'} />
            <div className='services-center'>
                {services.map(service => {
                    return (
                        <div key={service.id} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Services