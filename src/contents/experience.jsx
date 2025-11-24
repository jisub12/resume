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
                    <div className="text-slate-500 text-[21px] md:text-[21px]">2025. 01 ~ 2025. 11</div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-[22px] md:text-[28px] font-extrabold">오더바이(Orderbye)</h3>
                            <Badge color="blue">재직 중</Badge>
                            <Badge>10개월</Badge>
                        </div>
                        {/* 챕터 1 */}
                        <div className="italic text-slate-500">코인스테이킹 / 풀스택 개발</div>
                        <ul className="list-disc list-outside pl-5 leading-7 text-[15px] md:text-[16px] text-slate-800">
                            <li>Rust/Anchor IDL 기반 토큰 스테이킹, 보상 클레임, 언스테이킹 스마트 컨트랙트 개발</li>
                            <li>USDC 환산 및 토큰 가격 API 연동, 기간 필터 및 페이지네이션을 통한 거래 내역 조회 성능 최적화</li>
                            <li>관리자 페이지 개발 및 온체인/오프체인 데이터 통합 관리 기능 구현</li>
                            <li>RESTful API 설계 및 데이터베이스 스키마 설계/구축</li>
                        </ul>

                        {/* 챕터 2 */}
                        <div className="italic text-slate-500 mt-40">무기제작&합성 / 풀스택 개발</div>
                        <ul className="list-disc list-outside pl-5 leading-7 text-[15px] md:text-[16px] text-slate-800">
                            <li>Rust/Anchor IDL 기반 NFT 무기 제작, 합성, 소각 스마트 컨트랙트 개발</li>
                            <li>사용자 경험을 고려한 프론트엔드 기능 구현 및 외주 개발사와의 협업</li>
                            <li>cNFT, pNFT 트랜잭션의 백엔드 처리 구현을 통한 생산성 및 처리 속도 개선</li>
                            <li>순차 처리에서 병렬 처리로 전환하여 트랜잭션 처리 속도 대폭 향상</li>
                            <li>RESTful API 설계 및 데이터베이스 스키마 설계/구축</li>
                            <li>관리자 페이지 개발 및 온체인/오프체인 데이터 통합 관리 기능 구현</li>
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
                            <li>Feature-Sliced Design 패턴 적용을 통한 확장 가능한 프론트엔드 아키텍처 설계</li>
                            <li>Chakra UI와 Tailwind CSS 기반 디자인 시스템 구축 및 재사용 가능한 공통 컴포넌트 개발</li>
                            <li>Redux Toolkit과 Thunk를 활용한 전역 상태 관리 및 비동기 로직 표준화</li>
                            <li>WebSocket 연동을 통한 알림 및 거래 상태 실시간 동기화 구현</li>
                            <li>Storybook 도입을 통한 UI 컴포넌트 문서화 및 독립적 테스트 환경 구축</li>
                        </ul>

                        {/* 챕터 2 */}
                        <div className="italic text-slate-500 mt-40">사내 사이드 프로젝트 / 프론트엔드 개발</div>
                        <ul className="list-disc list-outside pl-5 leading-7 text-[15px] md:text-[16px] text-slate-800">
                            <li>손이고(미용사-고객 매칭 플랫폼) 웹앱 프론트엔드 개발</li>
                            <li>Throne(글로벌 소셜 네트워킹 플랫폼) 웹앱 프론트엔드 개발</li>
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