import { Link } from 'react-router-dom'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import React from 'react'
import MyLogo from "@src/img/logo.png";

export default function Nav(): JSX.Element {
    return (
        <React.Fragment>
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/">
                        <a className="logo flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#" target="_blank">
                            <img src={MyLogo} alt="myLogo" style={{ width: '50px' }} />
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-3 md:gap-0">
                        <Link to="/">{<span className="Nav_text mr-5">홈</span>}</Link>
                        <Link to="/About">{<span className="Nav_text mr-5">소개</span>}</Link>
                        <Link to="/Site">{<span className="Nav_text mr-5">사이트</span>}</Link>
                        <Link to="/introduce">{<span className="Nav_text mr-5">프로젝트</span>}</Link>
                        <a href="https://open.kakao.com/o/s6c0Jpxe" className="Nav_text mr-5">연락하기</a>

                        <DarkModeToggle></DarkModeToggle>

                        <div className="ml-3 relative">
                            <a href='https://github.com/light9639'>
                                <button type="button" className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/95972251?v=4" alt="" />
                                </button>
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}