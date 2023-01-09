import MainAnimation from '@components/MainAnimation/MainAnimation'
import { useNavigate } from 'react-router';

export default function Section(): JSX.Element {
    let navigate = useNavigate();

    return (
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-14 md:py-28 flex-col lg:flex-row items-center">
                <div className="flex flex-col mb-16 items-center text-center lg:w-1/2 lg:pr-16 lg:items-start lg:text-left lg:mb-0 lg:flex-grow">
                    <h1 className="title-font text-2xl mb-0 lg:mb-4 font- text-gray-900 md:text-3xl">안녕하세요.</h1>
                    <h1 className="title-font text-2xl mb-4 font-semibold text-gray-900 md:text-3xl leading-">
                        저의 포트폴리오 사이트에 <br className='block lg:hidden'></br>방문해주셔서 감사합니다!
                    </h1>
                    <p className="mb-8 leading-relaxed text-base mt-3">저는 웹 프론트엔드 개발분야에 <br className='block sm:hidden' />취업을 준비중인 이동호 입니다.
                        <br />React, Express, Typescript 등 <br className='block sm:hidden' />웹개발에 필요한 기술에 관심이 많습니다.</p>
                    <div className="flex justify-center">
                        <button
                            type='button'
                            className="Blue_box inline-flex py-2.5 px-5 text-base focus:outline-none border-none hover:opacity-75 transition mr-3"
                            onClick={() => {navigate('/About')}}
                        >About Me</button>
                        <button
                            type='button'
                            className="Blue_box inline-flex py-2.5 px-5 text-base focus:outline-none border-none hover:opacity-75 transition"
                            onClick={() => {navigate('/introduce')}}
                        >프로젝트 보러가기</button>
                    </div>
                </div>
                <div className="w-5/6 lg:w-full lg:max-w-lg">

                    <MainAnimation />

                </div>
            </div>
        </section>
    )
}