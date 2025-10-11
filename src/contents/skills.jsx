import { Wrapper, Heading } from '../components/common'

const sections = [
    {
        title: 'Languages',
        cols: [['Rust', 'Java'], ['JavaScript', 'TypeScript'], ['Solidity', 'HTML/CSS']],
    },
    {
        title: 'Frameworks & Libraries',
        cols: [['MyBatis', 'Anchor(Solana)'], ['React.js', 'Vue.js'], ['Node.js', 'Express.js']],
    },
    {
        title: 'Web3',
        cols: [['Solana Program(Rust/Anchor)'], ['EVM(Solidity)']],
    },
    {
        title: 'Infrastructure & Databases',
        cols: [['AWS'], ['MySQL']],
    },
    {
        title: 'Tools & IDEs',
        cols: [['Cursor', 'VS Code'], ['Git', 'Github'], ['Notion']],
    },
]

const Section = ({ title, cols }) => (
    <li className="flex flex-row gap-[32px] py-[32px]">
        <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[25%] md:w-[240px]">
            {title}
        </h3>
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                {cols.map((items, idx) => (
                    <ul key={idx} className="list-disc list-inside text-[16px] text-slate-800 space-y-2">
                        {items.map((label, i) => (
                            <li key={i}>{label}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    </li>
)

const Skills = () => {
    return (
        <Wrapper>
            <Heading><p className="text-blue-600">SKILL</p></Heading>
            <ul className="flex flex-col divide-y divide-gray-200">
                {sections.map((s) => (
                    <Section key={s.title} title={s.title} cols={s.cols} />
                ))}
            </ul>
        </Wrapper>
    )
}

export default Skills