import React from 'react'

function About() {
    return (
        <>
            <div className='pt-16'>
                <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
                    <div className="About_box_behind absolute inset-0 bg-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="About_box relative px-4 py-20 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-xl mx-auto text-center">
                            <div>
                                <h1 className="text-3xl font-extrabold pb-10"><span className="text_gradient">About Me</span></h1>
                                <img src="" alt="" />
                                <p className='pb-2'><span className='text-2xl'>📝</span> 이름 : 이동호</p>
                                <p className='pb-2'><span className='text-2xl'>📆</span> 생년월일 : 1996년 02월 19일</p>
                                <p className='pb-2'><span className='text-2xl'>🏠</span> 주소 : 서울특별시 양천구 거주</p>
                                <p className='pb-2'><span className='text-2xl'>📱</span> 전화번호 : 010-8780-9639</p>
                                <p className='pb-2'><span className='text-2xl'>📧</span> 이메일 : dong9639@naver.com</p>
                                <p className='pb-2'><span className='text-2xl'>🏫</span> 학력 : 방송통신대학교 (경영학과) 졸업</p>
                                <p className='pb-2'><span className='text-2xl'>🔗</span> 깃허브 페이지 : <a href='https://github.com/light9639'>https://github.com/light9639</a></p>
                            </div>
                            <div className='pt-1'>
                                <p className="mt-5 mb-7">안녕하세요. 저의 포트폴리오 사이트에 방문해주셔서 감사합니다! <br className='hidden md:block'/>
                                    저는 웹 프론트엔드 개발분야에 취업을 준비중인 이동호 입니다. <br className='hidden md:block'/>
                                    React, Express, Typescript 등 웹 개발에 필요한 기술에 관심이 많습니다. </p>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="py-5">
                                <h2 className="text-3xl font-extrabold pb-4"><span className="text_gradient">Skills</span></h2>
                                <div className='flex flex-wrap mx-auto'>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50" />
                                        <span className='font-semibold'>Html5</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" />
                                        <span className='font-semibold'>Css3</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="50" height="50" />
                                        <span className='font-semibold'>Scss</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50" />
                                        <span className='font-semibold'>Javascript</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" alt="jQuery" width="50" height="50" />
                                        <span className='font-semibold'>Jquery</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescriptlang" width="50" height="50" />
                                        <span className='font-semibold'>TypeScript</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" width="50" height="50" />
                                        <span className='font-semibold'>React</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50" />
                                        <span className='font-semibold'>Git</span>
                                    </a>
                                </div>
                            </div>
                            <hr className="border-gray-300" />
                            <div className='pt-10 sm:pt-10'>
                            <h2 className="text-3xl font-extrabold pb-4"><span className="text_gradient">PDF Link</span></h2>
                                <p className='mb-7 text-base'>포트폴리오 소개를 일러스트로 편집하여 만든<br />
                                    PDF 파일 링크 입니다.</p>
                                <a href="https://drive.google.com/file/d/1OXYfrVdTLmlAT5AlEjNey3lFRs0_67-Q/view?usp=sharing">
                                    <span className='Blue_box px-4 py-3 rounded-md text-white text-xl sm:text-2xl'>포트폴리오 PDF 링크</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About