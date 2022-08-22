import React from 'react'
import { Link } from 'react-router-dom'
import viteLogo from "../img/logo.png"

function Nav() {
    return (
        <>
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#" target="_blank">
                            <img src={viteLogo} alt="viteLogo" style={{ width: '50px' }} />
                            <span className="ml-3 text-xl">My Project</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/">{<a href="#" className="mr-5 hover:text-gray-900">홈</a>}</Link>
                        <Link to="/introduce">{<a href="#" className="mr-5 hover:text-gray-900">프로젝트</a>}</Link>
                        <Link to="/contact">{<a href="#" className="mr-5 hover:text-gray-900">연락하기</a>}</Link>
                        <button type="button" className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
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
        </>
    )
}

export default Nav