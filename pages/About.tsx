import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About(): JSX.Element {
    useEffect(() => {
        AOS.init();
    })

    return (
        <React.Fragment>
            <div className='pt-16'>
                <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
                    <div className="About_box_behind absolute inset-0 bg-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="About_box relative px-4 py-20 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-xl mx-auto text-center">
                            <div data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                                <h1 className="text-3xl font-extrabold pb-10"><span className="text_gradient2">About Me</span></h1>
                                <p className='pb-2'><span className='text-2xl'>📝</span> 이름 : 이동호</p>
                                <p className='pb-2'><span className='text-2xl'>📆</span> 생년월일 : 1996년 02월 19일</p>
                                <p className='pb-2'><span className='text-2xl'>🏠</span> 주소 : 서울특별시 양천구 거주</p>
                                <p className='pb-2'><span className='text-2xl'>📱</span> 전화번호 : 010-8780-9639</p>
                                <p className='pb-2'><span className='text-2xl'>📧</span> 이메일 : dong9639@naver.com</p>
                                <p className='pb-2'><span className='text-2xl'>🏫</span> 학력 : 방송통신대학교 (경영학과) 졸업</p>
                                <p className='pb-2'><span className='text-2xl'>🔗</span> 깃허브 페이지 : <a href='https://github.com/light9639'>https://github.com/light9639</a></p>
                                <p className='pb-2'><span className='text-2xl'>🖇️</span> 티스토리 블로그 : <a href='https://light9639.tistory.com/'>https://light9639.tistory.com/</a></p>
                            </div>
                            <div className='pt-1'>
                                <p className="mt-5 mb-7" data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">안녕하세요. 저의 포트폴리오 사이트에 방문해주셔서 감사합니다! <br className='hidden md:block' />
                                    저는 웹 프론트엔드 개발분야에 취업을 준비중인 이동호 입니다. <br className='hidden md:block' />
                                    React, Vue, Express, Typescript 등 웹 개발에 필요한 기술에 관심이 많습니다. </p>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="py-5">
                                <h2 className="text-3xl font-extrabold pb-4"><span className="text_gradient2">Skills</span></h2>
                                <div className='flex flex-wrap max-w-full items-end' data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50" />
                                        <span className='font-semibold'>Html5</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" />
                                        <span className='font-semibold'>Css3</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="50" height="50" />
                                        <span className='font-semibold'>Scss</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50" />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" alt="jQuery" width="50" height="50" />
                                        <span className='font-semibold'>Jquery</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescriptlang" width="50" height="50" />
                                        <span className='font-semibold'>TypeScript</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" width="50" height="50" />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://camo.githubusercontent.com/7b7f04b16cc2d2d4a32985710e4d640985337a32bbb1e60cdacede2c8a4ae57b/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656475782e737667" alt="Redux" width="50" height="50" />
                                        <span className='font-semibold'>Redux</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://raw.githubusercontent.com/light9639/light9639/f5e72f3d4825b02864345ac21d9ce2f62c1afadb/Icon%20Img/next.svg" alt="react" width="50" height="50" />
                                        <span className='font-semibold'>Next.js</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://camo.githubusercontent.com/b6f36ebebc3f53a13d962534b4433b6b5222006c79071322b5e6d6cc0f9e876d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7675656a732f7675656a732d69636f6e2e737667" alt="Vue" width="50" height="50" />
                                        <span className='font-semibold'>Vue</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='m-3 p-0.5' src="https://raw.githubusercontent.com/light9639/light9639/main/Icon%20Img/Vuex.png" alt="Vuex" width="50" height="50" />
                                        <span className='font-semibold'>Vuex</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50" />
                                        <span className='font-semibold'>Git</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://raw.githubusercontent.com/light9639/light9639/main/Icon%20Img/Photoshop.png" alt="Photoshop" width="50" height="50" />
                                        <span className='font-semibold line-clamp-1'>PhotoShop</span>
                                    </div>
                                    <div className='w-1/4 sm:w-1/5 md:w-[16%] flex flex-col items-center'>
                                        <img className='rounded-md m-3' src="https://raw.githubusercontent.com/light9639/light9639/main/Icon%20Img/Illustrator.png" alt="Illustrator" width="50" height="50" />
                                        <span className='font-semibold'>Illustrator</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-gray-300" />
                            <div className='pt-10 sm:pt-10'>
                                <h2 className="text-3xl font-extrabold pb-4"><span className="text_gradient2">PDF Link</span></h2>
                                <p className='mb-7 text-base' data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">포트폴리오 소개를 일러스트로 편집하여 만든<br />
                                    PDF 파일 링크 입니다.</p>
                                <a href="https://drive.google.com/file/d/1DAhdA51cf98S9FyJLee69akXDXVfHg2M/view?usp=share_link" className='Blue_box px-5 py-3 rounded-md text-white text-xl sm:text-2xl' data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                                    <span>포트폴리오 PDF 링크</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}