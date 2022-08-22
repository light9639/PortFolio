import React from 'react'
import '../index.css'
import Animation from './Animation'

function Undefined() {
    return (
        <>
            <div style={{ maxWidth: "100%", width: "600px", margin: "auto" }}>
                <Animation />
                <h2 style={{ fontSize: "24px" }}>지금은 페이지 준비 중입니다.</h2>
            </div>
        </>
    )
}

export default Undefined