import Lottie from 'react-lottie-player'
import animationData from '../animation/404.json'

const Animation = () => {
    return (
        <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: `100%`, height: `100%` }}
        />
    )
}

export default Animation