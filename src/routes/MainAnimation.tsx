import React from 'react'
import Lottie from 'react-lottie-player'
import CodingBoy from '../animation/coding-boy.json'

const MainAnimation = () => {
    return (
        <Lottie
            loop
            animationData={CodingBoy}
            play
            style={{ width: `100%`, height: `100%` }}
        />
    )
}

export default MainAnimation