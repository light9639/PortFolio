import MainAnimation from '@components/MainAnimation/MainAnimation'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Section(): JSX.Element {
    let navigate = useNavigate();

    return (
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-14 md:py-28 flex-col lg:flex-row items-center">
                <div className="flex flex-col mb-16 items-center text-center lg:w-1/2 lg:pr-16 lg:items-start lg:text-left lg:mb-0 lg:flex-grow">
                    <h1 className="title-font text-2xl mb-0 lg:mb-4 font- text-gray-900 md:text-3xl">안녕하세요.</h1>
                    <h1 className="title-font text-2xl mb-4 font-semibold text-gray-900 md:text-3xl leading-">
                        저의 포트폴리오 사이트에 <br className='block lg:hidden' />방문해주셔서 감사합니다!
                    </h1>
                    <p className="mb-7 leading-relaxed text-base mt-3">저는 웹 프론트엔드 개발분야에 <br className='block sm:hidden' />취업을 준비중인 이동호 입니다.
                        <br />React, Express, Typescript 등 <br className='block sm:hidden' />웹개발에 필요한 기술에 관심이 많습니다.</p>
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-3">
                        <Link to="/About" className="Blue_box WebKit inline-flex py-2 px-5 leading-8 focus:outline-none border-none hover:opacity-75 transition line-clamp-1">
                            About Me
                        </Link>
                        <Link to="/Site" className="Blue_box WebKit inline-flex py-2 px-5 leading-8 focus:outline-none border-none hover:opacity-75 transition">
                            My Site Page
                        </Link>
                        <Link to="/introduce" className="Blue_box WebKit inline-flex py-2 px-5 leading-8 focus:outline-none border-none hover:opacity-75 transition">
                            My Project Page
                        </Link>
                    </div>
                </div>
                <div className="w-5/6 lg:w-full lg:max-w-lg">

                    <MainAnimation />

                </div>
            </div>
        </section>
    )
}