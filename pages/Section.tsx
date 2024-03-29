import React, { useEffect } from "react";
import MainAnimation from '@components/MainAnimation'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Section(): JSX.Element {
    let navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    })

    return (
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-14 md:py-28 md:px-10 flex-col xl:flex-row items-center">
                <div className="flex flex-col mb-16 items-center text-center xl:w-1/2 xl:pr-16 xl:items-start xl:text-left xl:mb-0 xl:flex-grow" data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                    <h1 className="title-font text-2xl mb-1 xl:mb-4 text-gray-900 md:text-3xl">안녕하세요.</h1>
                    <h1 className="dark:text-white title-font leading-9 xl:leading-8 text-2xl mb-4 font-semibold text-gray-900 md:text-3xl">
                        저의 포트폴리오 사이트에 <br className='block xl:hidden' />방문해주셔서 감사합니다!
                    </h1>
                    <p className="mb-9 leading-relaxed text-base mt-3" data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">저는 웹 퍼블리싱, 프론트엔드 개발분야에 취업을 준비중인 이동호 입니다.
                        <br className='hidden sm:block' /> React, Vue, Express, Typescript 등 웹개발에 필요한 기술에 관심이 많습니다.</p>
                    <div className="flex justify-center flex-wrap md:flex-nowrap gap-3">
                        <Link to="/About" className="Blue_box sm:w-auto WebKit py-2 px-5 leading-8 focus:outline-none border-none transition">
                            <span className="text-sm sm:text-base">About Me</span>
                        </Link>
                        <Link to="/Site" className="Blue_box sm:w-auto WebKit py-2 px-5 leading-8 focus:outline-none border-none transition">
                            <span className="text-sm sm:text-base">My Site Page</span>
                        </Link>
                        <Link to="/introduce" className="Blue_box sm:w-auto WebKit py-2 px-5 leading-8 focus:outline-none border-none transition">
                            <span className="text-sm sm:text-base">My Project Page</span>
                        </Link>
                    </div>
                </div>
                <div className="w-5/6 lg:w-full lg:max-w-lg" data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                    <MainAnimation />
                </div>
            </div>
        </section>
    )
}