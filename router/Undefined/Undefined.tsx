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
                    <p className="text_gradient2 text-2xl font-semibold md:text-[1.7rem]">Sorry, we couldn't find this page.</p>
                    <p className="mt-5 mb-8 text-sm md:text-[1.1rem] dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <button
                    onClick={() => {navigate("/");}}
                        className="px-8 py-3 font-semibold rounded Blue_box hover:opacity-75 transition"
                    >Back to homepage</button>
                </div>
            </div>
        </React.Fragment>
    )
}