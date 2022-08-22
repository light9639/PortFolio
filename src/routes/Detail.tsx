import React from 'react'

function Detail() {
    return (
        <>
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Insert Title Here</h1>
                        <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">포트폴리오 사이트 링크</button>
                        </div>
                    </div>
                    <div className="lg:max-h-sm lg:max-w-2xl lg:w-full md:w-3/4 w-full ">
                        <img className="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dj3qdir59/image/upload/v1644157136/large_laptoptest_0d41cb2dca.jpg" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail