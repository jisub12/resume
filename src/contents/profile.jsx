import { Hero } from '../components/common'
import { IoLogoGithub } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'
import { FaBlogger, FaPhone } from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'

const Profile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const animatedElementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.5 },
        )

        if (animatedElementRef.current) {
            observer.observe(animatedElementRef.current)
        }

        return () => {
            if (animatedElementRef.current) {
                observer.unobserve(animatedElementRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={animatedElementRef}
            className={`flex flex-row items-center justify-between gap-[38px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="w-[280px] md:w-[28%] ">
                <img
                    src={process.env.PUBLIC_URL + '/jisub_photo.jpeg'}
                    aria-hidden
                    alt="profile image"
                    className="w-[100vw] m-auto rounded-full border-2 border-slate-500"
                />
            </div>
            <div className="w-[100%] box-border md:w-[70%] md:p-[10px] ">
                <Hero>
                    황지섭 <span className="text-[16px] text-slate-400 font-normal">paJion</span>
                </Hero>
                {/* <p className="text-slate-700 pt-[5px] md:text-[24px] md:pt-[10px] text-[16px]">
                    꾸준함 세계 1등 풀스택/블록체인 개발자
                </p> */}
                <p className="flex flex-col text-[16px] items-left pt-[7px] md:pt-[5px] md:text-[14px]">
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        <FaPhone />
                        010-2057-9477
                    </a>
                    <a
                        target="_blink"
                        href="mailto:jisub11@nate.com"
                        className="flex items-center gap-[5px] text-slate-600"
                    >
                        <TfiEmail />
                        jisub11@nate.com
                    </a>
                    <a
                        target="_blink"
                        href="https://github.com/jisub12"
                        className="flex items-center gap-[5px] text-slate-600"
                    >
                        <IoLogoGithub />
                        https://github.com/jisub12
                    </a>
                    {/* <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44"
                        className="flex items-center gap-[5px] text-slate-600"
                    >
                        <FaBlogger />
                        https://blog.naver.com/jisub44
                    </a> */}
                </p>
            </div>
        </div>
    )
}

export default Profile
