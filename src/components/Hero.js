import React from 'react'


function Hero({ sectionName, children }) {
    return (
        <header className={sectionName}>
            {children}
        </header>
    )
}

export default Hero