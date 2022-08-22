import React from 'react'

function Contact() {
    return (

        <div className='pt-8'>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto text-center sm:text-left">
                    <div>
                        <h1 className="text-3xl font-extrabold pb-4">연락하기</h1>
                        <p className="mt-3">안녕하세요! 저는 프론트엔드 개발에 대한 관심이 많습니다. 만약 질문이 있으시거나, 연락을 원하신다면 연락 부탁드립니다.</p>
                    <hr className="mt-3 border-gray-300" />
                    </div>
                    <div className="divide-y divide-gray-200">
                        <form className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                이름 <span className="text-red-500">*</span>
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                이메일 <span className="text-red-500">*</span>
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email" />

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                메세지 <span className="text-red-500">*</span>
                            </label>
                            <textarea required className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200" placeholder="Your message..."></textarea>

                            <div className="flex items-end justify-end">
                                <button className="bg-blue-500 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                                    보내기
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact