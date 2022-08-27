import React from 'react'
import Animation from './Animation'

function Undefined() {
    return (
        <>
            <div className='Undefined' style={{ maxWidth: "100%", width: "600px", margin: "auto" }}>
                <h1 className='text_gradient'>404</h1>
                <h2 className='text_gradient'>Oops! Page Not Found.</h2>
                <Animation />
            </div>
        </>
    )
}

export default Undefined