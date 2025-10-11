import { Wrapper } from '../components/common'

const Education = () => {
    return (
        <Wrapper>
            <div className="flex items-center gap-2">
                <h2 className="text-[28px] md:text-[40px] font-extrabold text-blue-600 tracking-[0.04em] uppercase">
                    Education
                </h2>
            </div>
            <ul className="mt-6 flex flex-col gap-[56px]">
                {/* 블록 1 */}
                <li className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
                    <div className="text-slate-500 text-[21px] md:text-[21px]">2023. 02 ~ 2023. 12</div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-[22px] md:text-[28px] font-extrabold">블록체인 9기 과정 수료</h3>
                            <p className="text-[15px] md:text-[16px] text-slate-500">경일게임아카데미</p>
                        </div>
                    </div>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Education