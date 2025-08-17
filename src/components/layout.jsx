import { IoLogoGithub } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'
import { FaBlogger, FaPhone } from 'react-icons/fa6'

const Layout = ({ children }) => {
    return (
        <div className="w-full min-h-screen bg-white text-slate-900">
            <div className="mx-auto max-w-[1100px] md:grid md:grid-cols-[280px_1fr] md:gap-8 p-[16px] md:p-[30px]">
                <aside className="hidden md:block sticky top-[30px] self-start">
                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <img
                                src={process.env.PUBLIC_URL + '/jisub_photo.jpeg'}
                                alt="profile"
                                className="w-[180px] h-[180px] rounded-full border-2 border-slate-300 object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-[24px] font-extrabold">
                                황지섭 <span className="text-slate-400 text-[14px]">paJion</span>
                            </h1>
                            <p className="text-slate-700 text-[14px] mt-1">풀스택/블록체인 개발자</p>
                        </div>
                        <nav className="mt-2">
                            <ul className="text-[14px] flex flex-col gap-2">
                                <li><a href="#profile" className="text-slate-700 hover:text-black">Profile</a></li>
                                <li><a href="#introduce" className="text-slate-700 hover:text-black">Introduce</a></li>
                                <li><a href="#projects" className="text-slate-700 hover:text-black">Projects</a></li>
                                <li><a href="#skills" className="text-slate-700 hover:text-black">Skills</a></li>
                                {/* <li><a href="#education" className="text-slate-700 hover:text-black">Education</a></li>
                                <li><a href="#certifications" className="text-slate-700 hover:text-black">Certifications</a></li> */}
                                <li><a href="#contact" className="text-slate-700 hover:text-black">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="mt-2 flex flex-col gap-2 text-[14px]">
                            <a target="_blank" rel="noreferrer" href="tel:01020579477" className="flex items-center gap-2 text-slate-700">
                                <FaPhone /> 010-2057-9477
                            </a>
                            <a target="_blank" rel="noreferrer" href="mailto:jisub11@nate.com" className="flex items-center gap-2 text-slate-700">
                                <TfiEmail /> jisub11@nate.com
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jisub12" className="flex items-center gap-2 text-slate-700">
                                <IoLogoGithub /> github.com/jisub12
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://blog.naver.com/jisub44" className="flex items-center gap-2 text-slate-700">
                                <FaBlogger /> blog.naver.com/jisub44
                            </a>
                        </div>
                    </div>
                </aside>

                <main className="min-w-0">{children}</main>
            </div>
        </div>
    )
}

export default Layout


