import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div
            ref={animatedElementRef}
            className={`w-full pt-[32px] md:pt-[48px] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="w-full flex flex-col gap-[16px] md:grid md:grid-cols-[240px_1fr] md:gap-[40px]">
                <h2 className="text-[28px] md:text-[40px] text-blue-600 font-extrabold tracking-[0.04em] uppercase">
                    INTRODUCE
                </h2>

                <div className="flex flex-col gap-[18px] text-[16px] md:text-[18px] leading-[1.9] text-slate-800">
                    <p>
                        웹/앱 백엔드와 Web3를 연결하는 풀스택 개발자입니다. Solidity(EVM), Rust/Anchor(Solana),
                        Java, Vue.js, React, TypeScript 등을 활용하여 설계부터 운영까지 전 과정을 경험했으며,
                        확장 가능하고 유지보수성이 높은 아키텍처와 가독성 있는 코드 작성을 지향합니다.
                    </p>
                    <p>
                        <a href="https://punkvism.io" target='_blank' rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">punkvism</a>의 모든 기능 개발을 담당하며, 솔라나 기반 블록체인 프로젝트의 모든 것을 구현하고 운영한 경험이 있습니다.
                        또한 이더리움 기반 DEX 거래소 개발 경험과, 개인 프로젝트로 2D 게임을 바닐라 자바스크립트만으로
                        구현한 경험을 보유하고 있습니다.
                    </p>
                    <p>
                        AWS를 통한 서비스 배포를 직접 수행했으며, 노션을 활용한 체계적인 문서화와
                        해결한 문제들을 기록하는 습관을 가지고 있습니다.
                    </p>

                    <div className="flex justify-end items-center gap-2 text-[12px] md:text-[14px] text-slate-600 mt-[8px]">
                        <span className="text-slate-500">Latest Updated</span>
                        <span className="bg-slate-100 border border-slate-300 text-slate-700 px-3 py-1 rounded-full">
                            2025. 11. 24
                        </span>
                    </div>
                    <div className="text-right text-[28px] md:text-[32px] text-slate-400 italic">paJion</div>
                </div>
            </div>
        </div>
    )
}

export default Introduce