import React from 'react';
import Animation from '../Animation/Animation'
import "./UndefinedStyle.css";

export default function Undefined(): JSX.Element {
    return (
        <React.Fragment>
            <div className='Undefined' style={{ maxWidth: "100%", width: "600px", margin: "auto" }}>

                <Animation />

                <div className="mx-auto text-center">
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-5 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <button className="px-8 py-3 font-semibold rounded Blue_box">Back to homepage</button>
                </div>
            </div>
        </React.Fragment>
    )
}