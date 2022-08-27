import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

function Nav() {
    return (
        <>
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#" target="_blank">
                            <img src="https://raw.githubusercontent.com/light9639/PortFolio/master/src/img/logo.png" alt="viteLogo" style={{ width: '50px' }} />
                            <span className="text_gradient ml-3 text-xl">My Project</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/">{<a href="#" className="mr-5 hover:text-gray-900">홈</a>}</Link>
                        <Link to="/About">{<a href="#" className="mr-5 hover:text-gray-900">소개</a>}</Link>
                        <Link to="/introduce">{<a href="#" className="mr-5 hover:text-gray-900">프로젝트</a>}</Link>
                        <a href="https://open.kakao.com/o/s6c0Jpxe" className="mr-5 hover:text-gray-900">연락하기</a>
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
        </>
    )
}

export default Nav