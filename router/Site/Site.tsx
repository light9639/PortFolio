import axios from "axios";
import { SiteType } from "@src/Type/TypeBox";
import { useQuery } from '@tanstack/react-query'
import React, { useState } from "react";

export default function Site(): JSX.Element {
    let [list, setList] = useState<SiteType[]>([]);

    const result = useQuery(['Query'], () =>
        axios.get('https://raw.githubusercontent.com/light9639/PortFolio/master/data/siteData.json')
            .then((res) => { return setList(res.data) }),
    )

    return (
        <React.Fragment>
            <h2 className="mt-10 text-3xl font-bold text-center sm:text-4xl"><span className="text_gradient2">Light9639's</span> 사이트 모음</h2>
            <div className="flex flex-wrap -m-3 dark:bg-slate-900 mt-10 max-w-5xl mx-auto">
                <React.Fragment>
                    {
                        list.map(function (item, idx: number) {
                            return (
                                <div className="w-full sm:w-1/1 md:w-1/2 flex flex-col p-5" key={idx}>
                                    <div className="introduce_box bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col hover:scale-105 hover:shadow-2xl transition">
                                        <div
                                            className="bg-cover h-80"
                                            style={{ backgroundImage: "url(" + item.url + ")", backgroundSize: "cover", backgroundPosition: "center" }}
                                        ></div>
                                        <div className="p-4 flex-1 flex flex-col">
                                            <h3 className="font-semibold mb-4 text-2xl">{item.title}</h3>
                                            <div className="mb-4 text-grey-darker text-base flex-1">
                                                <p>{item.contents}</p>
                                            </div>
                                            <a
                                                href={item.href}
                                                className="border-t border-grey-light pt-7 pb-3 text-1xl text-grey hover:text-red no-underline tracking-wide"
                                            >
                                                <span className="Blue_box inline px-4 py-3 rounded-md text-white text-base md:text-lg line-clamp-1">{item.title}로 이동</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </React.Fragment>
            </div>
        </React.Fragment>
    );
}