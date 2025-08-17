import { Wrapper } from '../components/common'

const Badge = ({ children, color = 'gray' }) => {
    const colorMap = {
        blue: 'bg-blue-100 text-blue-700 border-blue-200',
        gray: 'bg-slate-100 text-slate-700 border-slate-200',
    }
    return (
        <span className={`px-2.5 py-1 rounded-full text-[12px] md:text-[13px] border ${colorMap[color]}`}>
            {children}
        </span>
    )
}

const Chip = ({ children }) => (
    <span className="px-2.5 py-1 rounded-[8px] text-[12px] md:text-[13px] bg-slate-100 text-slate-700">
        {children}
    </span>
)

const Experience = () => {
    return (
        <Wrapper>
            <div className="flex items-center gap-2">
                <h2 className="text-[28px] md:text-[40px] font-extrabold text-blue-600 tracking-[0.04em] uppercase">
                    Experience
                </h2>
                <Badge>총 1년 7개월</Badge>
            </div>

            <ul className="mt-6 flex flex-col gap-[56px]">
                {/* 블록 1 */}
                <li className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
                    <div className="text-slate-500 text-[21px] md:text-[21px]">2025. 01 ~ 2025. 08</div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-[22px] md:text-[28px] font-extrabold">오더바이(Orderbye)</h3>
                            <Badge color="blue">재직 중</Badge>
                            <Badge>8개월</Badge>
                        </div>
                        {/* 챕터 1 */}
                        <div className="italic text-slate-500">코인스테이킹 / 풀스택 개발</div>
                        <ul className="list-disc list-outside pl-5 leading-7 text-[15px] md:text-[16px] text-slate-800">
                            <li>Rust/Anchor IDL 기반으로 토큰 스테이킹·보상 클레임·언스테이킹 컨트랙트 작성</li>
                            <li>USDC 환산 및 토큰가격 API 연동 기간 필터·페이지네이션으로 내역 조회 최적화</li>
                            <li>관리자 페이지 연동을 통한 온/오프체인 관리 기능 구현</li>
                            <li>백엔드 API 설계 및 DB 테이블 구축</li>
                        </ul>

                        {/* 챕터 2 */}
                        <div className="italic text-slate-500 mt-40">무기제작&합성 / 풀스택 개발</div>
                        <ul className="list-disc list-outside pl-5 leading-7 text-[15px] md:text-[16px] text-slate-800">
                            <li>Rust/Anchor IDL 기반으로 무기제작·합성·소각(NFT) 컨트랙트 작성</li>
                            <li>UX를 고려한 프론트엔드 페이지 기능 구현 및 외주개발사와 소통</li>
                            <li>백엔드 API 설계 및 DB 테이블 구축</li>
                            <li>관리자 페이지 연동을 통한 온/오프체인 관리 기능 구현</li>
                        </ul>

                        <div className="pt-2">
                            <div className="text-slate-700 font-semibold mb-2">Skill Keywords</div>
                            <div className="flex flex-wrap gap-2">
                                <Chip>Rust</Chip>
                                <Chip>Solana Anchor</Chip>
                                <Chip>Vue.js</Chip>
                                <Chip>Java</Chip>
                                <Chip>MyBatis</Chip>
                                <Chip>MySQL</Chip>
                            </div>
                        </div>
                    </div>
                </li>
                {/* 블록 2 */}
                <li className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
                    <div className="text-slate-500 text-[21px] md:text-[21px]">2024. 02 ~ 2025. 01</div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-[22px] md:text-[28px] font-extrabold">바이올렛페이(VioletPay)</h3>
                            <Badge>12개월</Badge>
                        </div>
                        {/* 챕터 1 */}
                        <div className="italic text-slate-500">PG결제 모듈, 상점관리자(고객사 전용) / 프론트엔드 개발</div>
                        <ul className="list-disc list-outside pl-5 leading-7 text-[15px] md:text-[16px] text-slate-800">
                            <li>FSD 패턴을 통한 확장성 있는 프론트엔드 구조 설계 및 적용</li>
                            <li>Chakra UI + Tailwind로 디자인 시스템/반응형 UI 구축, 공통 컴포넌트 정리</li>
                            <li>Redux Toolkit(+thunk) 기반 상태관리 및 비동기 흐름 표준화</li>
                            <li>WebSocket 연동으로 알림/거래 상태 실시간 동기화</li>
                            <li>Storybook으로 UI 문서화 및 테스트 체계 구축</li>
                        </ul>

                        {/* 챕터 2 */}
                        <div className="italic text-slate-500 mt-40">사내 사이드 프로젝트 / 프론트엔드 개발</div>
                        <ul className="list-disc list-outside pl-5 leading-7 text-[15px] md:text-[16px] text-slate-800">
                            <li>손이고(미용사와 고객 매칭 서비스 웹앱) 프로젝트 프론트엔드 개발</li>
                            <li>Throne(외국인 친구 사귀기 웹앱) 프로젝트 프론트엔드 개발</li>
                        </ul>

                        <div className="pt-2">
                            <div className="text-slate-700 font-semibold mb-2">Skill Keywords</div>
                            <div className="flex flex-wrap gap-2">
                                <Chip>React</Chip>
                                <Chip>TypeScript</Chip>
                                <Chip>Redux</Chip>
                                <Chip>React-Query</Chip>
                                <Chip>Tailwind CSS</Chip>
                                <Chip>Chakra UI</Chip>
                                <Chip>Storybook</Chip>
                                <Chip>WebSocket</Chip>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Experience