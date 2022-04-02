import React from 'react'
import ReactLoading from 'react-loading';
function LoadingData() {
    return (
        <div className='loading' >
            <ReactLoading color='#af9a7d' type='spinningBubbles' /> <span>loading...</span>
        </div>
    )
}

export default LoadingData