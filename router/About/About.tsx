import React from 'react'

export default function About(): JSX.Element {
    return (
        <React.Fragment>
            <div className='pt-16'>
                <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
                    <div className="About_box_behind absolute inset-0 bg-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="About_box relative px-4 py-20 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-xl mx-auto text-center">
                            <div>
                                <h1 className="text-3xl font-extrabold pb-10"><span className="text_gradient2">About Me</span></h1>

                                <p className='pb-2'><span className='text-2xl'>π</span> μ΄λ¦ : μ΄λνΈ</p>
                                <p className='pb-2'><span className='text-2xl'>π</span> μλμμΌ : 1996λ 02μ 19μΌ</p>
                                <p className='pb-2'><span className='text-2xl'>π </span> μ£Όμ : μμΈνΉλ³μ μμ²κ΅¬ κ±°μ£Ό</p>
                                <p className='pb-2'><span className='text-2xl'>π±</span> μ νλ²νΈ : 010-8780-9639</p>
                                <p className='pb-2'><span className='text-2xl'>π§</span> μ΄λ©μΌ : dong9639@naver.com</p>
                                <p className='pb-2'><span className='text-2xl'>π«</span> νλ ₯ : λ°©μ‘ν΅μ λνκ΅ (κ²½μνκ³Ό) μ‘Έμ</p>
                                <p className='pb-2'><span className='text-2xl'>π</span> κΉνλΈ νμ΄μ§ : <a href='https://github.com/light9639'>https://github.com/light9639</a></p>
                            </div>
                            <div className='pt-1'>
                                <p className="mt-5 mb-7">μλνμΈμ. μ μ ν¬νΈν΄λ¦¬μ€ μ¬μ΄νΈμ λ°©λ¬Έν΄μ£Όμμ κ°μ¬ν©λλ€! <br className='hidden md:block' />
                                    μ λ μΉ νλ‘ νΈμλ κ°λ°λΆμΌμ μ·¨μμ μ€λΉμ€μΈ μ΄λνΈ μλλ€. <br className='hidden md:block' />
                                    React, Express, Typescript λ± μΉ κ°λ°μ νμν κΈ°μ μ κ΄μ¬μ΄ λ§μ΅λλ€. </p>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="py-5">
                                <h2 className="text-3xl font-extrabold pb-4"><span className="text_gradient2">Skills</span></h2>
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
                                        <img className='m-4 rounded-md' src="https://camo.githubusercontent.com/7b7f04b16cc2d2d4a32985710e4d640985337a32bbb1e60cdacede2c8a4ae57b/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656475782e737667" alt="Redux" width="50" height="50" />
                                        <span className='font-semibold'>Redux</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://raw.githubusercontent.com/light9639/light9639/main/Icon%20Img/Next.js.png" alt="react" width="50" height="50" />
                                        <span className='font-semibold'>Next.js</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://camo.githubusercontent.com/b6f36ebebc3f53a13d962534b4433b6b5222006c79071322b5e6d6cc0f9e876d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7675656a732f7675656a732d69636f6e2e737667" alt="Vue" width="50" height="50" />
                                        <span className='font-semibold'>Vue</span>
                                    </a>
                                    <a>
                                        <img className='m-4' src="https://raw.githubusercontent.com/light9639/light9639/main/Icon%20Img/Vuex.png" alt="Vuex" width="50" height="50" />
                                        <span className='font-semibold'>Vuex</span>
                                    </a>
                                    <a>
                                        <img className='m-4 rounded-md' src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50" />
                                        <span className='font-semibold'>Git</span>
                                    </a>
                                </div>
                            </div>
                            <hr className="border-gray-300" />
                            <div className='pt-10 sm:pt-10'>
                                <h2 className="text-3xl font-extrabold pb-4"><span className="text_gradient2">PDF Link</span></h2>
                                <p className='mb-7 text-base'>ν¬νΈν΄λ¦¬μ€ μκ°λ₯Ό μΌλ¬μ€νΈλ‘ νΈμ§νμ¬ λ§λ <br />
                                    PDF νμΌ λ§ν¬ μλλ€.</p>
                                <a href="https://drive.google.com/file/d/1DAhdA51cf98S9FyJLee69akXDXVfHg2M/view?usp=share_link">
                                    <span className='Blue_box px-4 py-3 rounded-md text-white text-xl sm:text-2xl'>ν¬νΈν΄λ¦¬μ€ PDF λ§ν¬</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}