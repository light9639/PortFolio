import React from 'react'
import '../index.css'
import Animation from './Animation'

function Undefined() {
    return (
        <>
            <div className='Undefined' style={{ maxWidth: "100%", width: "600px", margin: "auto" }}>
                <h1>404</h1>
                <h2>Oops! Page Not Found.</h2>
                <Animation />
            </div>
        </>
    )
}

export default Undefined