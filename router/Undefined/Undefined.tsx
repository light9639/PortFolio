import React from 'react';
import Animation from '@components/Animation/Animation'
import { useNavigate } from 'react-router-dom';

export default function Undefined(): JSX.Element {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className='Undefined max-w-full w-[90%] md:w-1/3 mx-auto'>

                <Animation />

                <div className="mx-auto text-center">
                    <h2 className="text_gradient2 text-2xl font-semibold md:text-[2rem]">조회된 내용이 없습니다.</h2>
                    <p className="my-8 text-sm md:text-[1.1rem] dark:text-gray-400">검색어를 확인하시고, 다시 시도해주세요.</p>
                    <button
                        onClick={() => { navigate("/"); }}
                        className="px-8 py-3 font-semibold Blue_box hover:opacity-75 transition"
                        style={{ borderRadius: "25px" }}
                    >홈으로 이동</button>
                </div>
            </div>
        </React.Fragment>
    )
}