import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from 'react-player'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default function BounceDEX() {
    const dexVideo = process.env.PUBLIC_URL + '/dexVideo.mp4'
    // const spaceVideo = process.env.PUBLIC_URL + '/spaceVideo.mov'
    return (
        <>
            <div>
                <div className="lg:w-[800px] h-[100px] m-auto">
                    <h2 className="font-bold text-xl">일시</h2>
                    <p>2023년 10월 23일 ~ 2023년 12월 05일</p>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">프로젝트 선택 이유</h2>
                    <p>
                        1) 기업에서 준 3개의 프로젝트(DEX, STO, Explorer) 중 가장 어려워 보여서 선택했다.
                        <br />
                        2) 부족한 수학적 능력을 극복할 수 있을 것 같아 선택했다.
                        <br />
                        3) 재태크에 도움이 될 수 있을 것 같아 선택했다.
                    </p>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">시나리오</h2>
                    <h2>1) 기술스택</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/DEXstack.png'} className="h-full" alt="" />
                    </div>
                    <br />
                    <br />
                    <h2>2) 플로우 차트</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/DEXdiagram.png'} className="h-full" alt="" />
                    </div>
                    <br />
                    <br />
                    <h2>3) 아키텍처 디자인</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/DEXachitecture.png'} className="h-full" alt="" />
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">개발 과정(내가 맡은 부분)</h2>
                    <div className="text-[15px]">
                        <p>- 디사이퍼에서 제공하는 온라인 강의를 통한 DEX 개념 숙지(약 2주)</p>
                        <p>- 전체 아키텍쳐 설계 (컨트렉트 팀)</p>
                        <p>- SmartContract의 Staking 부분 담당 (본인)</p>
                        <p>- Staking 전체 기획 및 코드 작성(Sushiswap의 스테이킹 부분 참고)</p>
                        <p>
                            - 컨트랙트의 보안 및 소유권 관리 기능을 강화를 위해 OpenZeppelin 라이브러리의 Ownable과
                            ReentrancyGuard를 활용
                        </p>
                        <p>- 탈주자들의 리워드를 현재 홀더들에게 재분배하는 스테이킹 메커니즘을 설계하고 구현</p>
                        <p>
                            - 컨트랙트의 구조와 로직을 확장성을 고려하여 설계함으로써 미래 요구사항의 변화에 유연하게
                            대응할 수 있도록 함(Staking Pool ID)
                        </p>
                        <p>- Contract부분 작성 완료 후 Front-end의 Staking부분 작성</p>
                        <p>- useQuery와 useQueryClient를 사용하여 스테이킹 관련 데이터를 비동기적으로 가져오고 캐싱</p>
                        <p>- Contract의 Event를 구독하여 데이터를 비동기적으로 실시간으로 수신하고 처리</p>
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">학습 내용</h2>
                    <div className="text-[15px]">
                        <p>- 이더리움 블록의 개념</p>
                        <p>- DEX 거래소의 개념</p>
                        <p>- 아키텍쳐 설계 방법</p>
                        <p>- 라이브러리의 사용 이유(Ownable, ReetrancyGuard)</p>
                        <p>- 스테이킹의 기본 메커니즘</p>
                        <p>- useQuery 사용 방법</p>
                        <p>- Contract의 Event를 프론트에서 렌더링 하는 방법</p>
                        <p>- 동기 비동기에 대한 이해도</p>
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">결과</h2>
                    1) 사이트 녹화
                    <ReactPlayer url={dexVideo} playing={true} controls={true} />
                    <br />
                    <br />
                    {/* <h1 className="font-bold text-xl">진행하며 어려웠던 부분 & 느낀점</h1>
                    <div className="w-full h-[536px]">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/DEX1.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/DEX2.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/DEX3.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/DEX4.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/DEX5.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/DEX6.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/DEX7.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/DEX8.png'} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div> */}
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">또 다른 관련 프로젝트 시행착오 기록 링크</h2>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223269703884"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 스테이킹 CA 작성 도중 pendingReward가 정상적으로 쌓이지 않던 문제에 관한 정리 내용 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223277769219"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - toWei 단위로 바꾸고 나서 생긴 문제에 대한 정리 내용 (Click)
                    </a>
                    <br />
                </div>
            </div>
        </>
    )
}
