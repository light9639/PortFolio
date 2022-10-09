import list from "../data";

function Introduce() {

    return (
        <>
            <h2 className="mt-10 text-3xl font-bold text-center sm:text-4xl">작성된 프로젝트 <span>8개</span></h2>
            <div className="flex flex-wrap -m-3 dark:bg-slate-900 mt-10 max-w-5xl mx-auto">
                {list.map(function (a, i: number) {
                    return (
                        <div className="w-full sm:w-1/1 md:w-1/2 flex flex-col p-5">
                            <div className="introduce_MainBox">
                                <div
                                    className="bg-cover h-80"
                                    style={{ backgroundImage: "url(" + list[i].url + ")", backgroundSize: "cover", backgroundPosition: "center" }}
                                ></div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="font-semibold mb-4 text-2xl">{list[i].title}</h3>
                                    <div className="mb-4 text-grey-darker text-base flex-1">
                                        <p>{list[i].contents} </p>
                                    </div>
                                    <div className="border-t border-grey-light pt-5 mb-4 text-grey-darker text-base flex-1">
                                        <p><span className="introduce_text">기간/인원 :</span> <span className="text_gradient">{list[i].time}</span> / <span className="font-medium">1인 개발</span> </p>
                                    </div>
                                    <a
                                        href={list[i].href1}
                                        className="border-t border-grey-light pt-5 text-1xl text-grey hover:text-red no-underline tracking-wide"
                                    >
                                        <span className="introduce_text">Github 바로가기 :</span> <span className="introduce_BlueBox">Github 페이지로 이동</span>
                                    </a>
                                    <a
                                        href={list[i].href2}
                                        className="pt-5 text-1xl text-grey hover:text-red uppercase no-underline tracking-wide"
                                    >
                                        <span className="introduce_text">프로젝트 바로가기 :</span> <span className="introduce_BlueBox">포트폴리오 페이지로 이동</span>
                                    </a>
                                </div>
                                <div className="pr-4 py-4 border-t border-grey-light">
                                    <span className="tech_skill hidden lg:inline-block pr-3 py-1 text-sm font-semiboldmr-2">사용기술 :</span>
                                    <span className="introduce_smallBox mr-2"># {list[i].use1}</span>
                                    <span className="introduce_smallBox mr-2"># {list[i].use2}</span>
                                    <span className="introduce_smallBox"># {list[i].use3}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Introduce;