import { FaBlogger, FaPhone } from 'react-icons/fa6'
import { IoLogoGithub } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'

const Footer = () => {
    return (
        <>
            {/* &copy; 2023.02.27 ~ 2023.12.11 경일게임아카데미 블록체인 9기 과정 수료  */}
            <h5 className="flex mt-[5px]">
                <a  target='_blink'
                    href="https://blog.naver.com/jisub44"
                    className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                >
                    <FaPhone />
                    010-2057-9477
                </a>
                <a target='_blink' href="mailto:jisub11@nate.com" className="flex items-center gap-[5px] text-slate-600 mr-[20px]">
                    <TfiEmail />
                    jisub11@nate.com
                </a>
                <a href="https://github.com/jisub12" className="flex items-center gap-[5px] text-slate-600 mr-[20px]">
                    <IoLogoGithub />
                    https://github.com/jisub12
                </a>
                {/* <a  target='_blink'
                    href="https://blog.naver.com/jisub44"
                    className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                >
                    <FaBlogger />
                    https://blog.naver.com/jisub44
                </a> */}
            </h5>
        </>
    )
}

export default Footer
