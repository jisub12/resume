import { Wrapper } from '../components/common'

const ETC = () => {
    const link = 'https://liquipedia.net/overwatch/PaJion/Coaching'

    const Item = ({ year, title }) => (
        <li className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
            <div className="text-slate-500 text-[21px] md:text-[21px]">{year}</div>
            <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[18px] md:text-[20px] font-semibold">{title}</h3>
                    <span className="text-slate-400 text-[14px]">blizzard</span>
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] text-slate-500 hover:underline break-all"
                >
                    {link}
                </a>
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
                    year="2020년"
                    title="Overwatch League 2020 - Countdown Cup 준우승"
                />
                <Item
                    year="2019년"
                    title="오버워치 리그 2019 시즌 스테이지 3 준결승"
                />
                <Item
                    year="2019년"
                    title="오버워치 리그 2019 시즌 스테이지 2 준우승"
                />
                <Item
                    year="2019년"
                    title="오버워치 리그 2019 시즌 스테이지 1 우승"
                />
                <Item
                    year="2019년"
                    title="오버워치 리그 2019 시즌 정규시즌 우승"
                />
                <Item
                    year="2019년"
                    title="오버워치 리그 2019 시즌 태평양 디비전 우승"
                />
                <Item
                    year="2018년"
                    title="Overwatch Contenders 2018 North"
                />
            </ul>
        </Wrapper>
    )
}

export default ETC