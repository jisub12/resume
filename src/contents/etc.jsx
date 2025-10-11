import { Wrapper } from '../components/common'

const ETC = () => {
    const link = 'https://namu.wiki/w/%ED%99%A9%EC%A7%80%EC%84%AD'

    const Item = ({ year, title, link }) => (
        <li className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
            <div className="text-slate-500 text-[21px] md:text-[21px]">{year}</div>
            <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[18px] md:text-[20px] font-semibold">{title}</h3>
                    <span className="text-slate-400 text-[14px]"></span>
                </div>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[14px] text-slate-500 hover:underline break-all"
                    >
                        {link}
                    </a>
                )}
            </div>
        </li>
    )

    return (
        <Wrapper>
            <div className="flex items-center gap-2">
                <h2 className="text-[28px] md:text-[40px] font-extrabold text-blue-600 tracking-[0.04em] uppercase">
                    ETC
                </h2>
            </div>

            <ul className="mt-6 flex flex-col gap-[28px] md:gap-[40px]">
                <Item
                    year="2015년 ~ 2022년(약8년)"
                    title="프로게임팀 감독"
                    link={link}
                />
                <Item
                    year="2023 ~"
                    title="블록체인 풀스택 개발자"
                />
            </ul>
        </Wrapper>
    )
}

export default ETC