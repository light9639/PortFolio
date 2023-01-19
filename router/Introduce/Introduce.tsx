// import list from "";
import axios from "axios";
import { IntroduceType } from "@src/Type/TypeBox";
import { useQuery } from '@tanstack/react-query'
import React, { useState } from "react";
import Loading from '@components/Loading/Loading';

export default function Introduce(): JSX.Element {
    let [list, setList] = useState<IntroduceType[]>([]);

    const result = useQuery(['Query'], () =>
        axios.get('https://raw.githubusercontent.com/light9639/PortFolio/master/data/data.json')
            .then((res) => { return setList(res.data) }),
    )

    return (
        <React.Fragment>
            <h2 className="mt-10 text-3xl font-bold text-center sm:text-4xl">작성된 프로젝트 <span className="text_gradient2">{list.length}개</span></h2>
            <div className="flex flex-wrap -m-3 dark:bg-slate-900 mt-10 max-w-5xl mx-auto">
                <React.Fragment>
                    {
                        list.map(function (item: IntroduceType, idx: number) {
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
                                                <p>{item.contents} </p>
                                            </div>
                                            <div className="border-t border-grey-light pt-5 mb-4 text-grey-darker text-base flex-1">
                                                <p>
                                                    <span className="hidden md:inline-block pb-2 md:pb-0">기간/인원 :</span> <span className="text_gradient">{item.time}</span> <br className={`${item.time2 ? "block" : "hidden"}`} /> <span className={`${item.time2 ? "inline-block" : "hidden"} text_gradient`}>{item.time2}</span> / <span className="font-medium">1인 개발</span> 
                                                </p>
                                            </div>
                                            <a
                                                href={item.href1}
                                                className="border-t border-grey-light pt-5 text-1xl text-grey hover:text-red no-underline tracking-wide"
                                            >
                                                <span className="hidden md:inline-block pb-2 md:pb-0">Github 바로가기 : </span> <span className="Blue_box inline-flex py-1.5 px-3.5 text-base focus:outline-none md:ml-1">Github 페이지로 이동</span>
                                            </a>
                                            <a
                                                href={item.href2}
                                                className="pt-5 text-1xl text-grey hover:text-red uppercase no-underline tracking-wide"
                                            >
                                                <span className="hidden md:inline-block pb-2 md:pb-0">프로젝트 바로가기 : </span> <span className="Blue_box inline-flex py-1.5 px-3.5 text-base focus:outline-none md:ml-1">포트폴리오 페이지로 이동</span>
                                            </a>
                                        </div>
                                        <div className="pr-4 py-4 border-t border-grey-light">
                                            <span className="tech_skill hidden lg:inline-block pr-3 py-1 text-sm font-semibold mr-2">사용기술 :</span>
                                            <span className="red_box inline-block rounded-md px-3 py-1 text-sm font-semibold text-white mr-2"># {item.use1}</span>
                                            <span className="red_box inline-block rounded-md px-3 py-1 text-sm font-semibold text-white mr-2"># {item.use2}</span>
                                            <span className="red_box inline-block rounded-md px-3 py-1 text-sm font-semibold text-white"># {item.use3}</span>
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