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
                        웹/앱 백엔드와 Web3를 잇는 풀스택 개발자입니다. Solidity(EVM), Rust/Anchor(Solana), 
                        Java, VueJs, React·TypeScript등을 사용하여 설계부터 운영까지 경험했으며,
                        확장성과 유지 보수성을 높이는 아키텍처와 읽기 쉬운 코드를 지향합니다.
                    </p>
                    <p>
                        솔라나기반 블록체인 프로젝트에서 코인스테이킹 개발 및 무기제작 및 합성 기능을 구현·운영해 본 경험이 있으며,
                        이더리움기반 블록체인 프로젝트(DEX거래소) 개발 경험이 있습니다.
                        또한, 개인 프로젝트로는 온체인과 프론트엔드를 유기적으로 연결한 2D 게임을 바닐라자바스크립트로 구현해낸 경험이 있습니다.
                    </p>
                    <p>
                        운영 측면에서는 AWS로 서비스 배포를 직접 수행했고, 노션을 통한 명확한 문서화와
                        작은 단위의 빠른 전달을 통해 팀의 합의를 이끌고, 끝까지 해내는 집념으로 비즈니스
                        임팩트를 만드는 것을 추구합니다.
                    </p>

                    <div className="flex justify-end items-center gap-2 text-[12px] md:text-[14px] text-slate-600 mt-[8px]">
                        <span className="text-slate-500">Latest Updated</span>
                        <span className="bg-slate-100 border border-slate-300 text-slate-700 px-3 py-1 rounded-full">
                            2025. 08. 16
                        </span>
                    </div>
                    <div className="text-right text-[28px] md:text-[32px] text-slate-400 italic">paJion</div>
                </div>
            </div>
        </div>
    )
}

export default Introduce