import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
function NoPage() {
    return (
        <>
            <Hero sectionName={'defaultHero'}>
                <Banner
                    title="404 Page Not Found">
                    <Link to="/" className="btn-primary">
                        Back Home
                    </Link>
                </Banner>
            </Hero>
        </>
    )
}

export default NoPage