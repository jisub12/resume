import React, { useRef, useState } from 'react'
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
// import { be_stack, be_erd, be_ucd, be_video, be_mainpc, be_maintablet, be_mainmobile, be_nftpc, be_nfttablet, be_nftmobile, } from '../img';

export default function Steam100() {
    const steam100VOD = process.env.PUBLIC_URL + '/steam100.mp4'
    return (
        <>
            <div>
                <div className="lg:w-[800px] h-[100px] m-auto">
                    <h2 className="font-bold text-xl">일시</h2>
                    <p>2023년 08월 07일 ~ 2023년 08월 25일</p>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">프로젝트 목적</h2>
                    <p>
                        1) Steam API를 활용해 Steam 내 TOP100 게임을 추천해주는 사용자 편의 사이트를 만드는 것.
                        <br />
                        2) 해당 게임에 대해 사용자끼리 의견을 교류할 수 있게 하는 것.
                    </p>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">시나리오</h2>
                    <h2>1) 기술스택</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/Steam100Stack.png'} className="h-full" alt="" />
                    </div>
                    <br />
                    <br />
                    <h2>2) Use Case Diagram</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/Steam100Diagram.png'} className="h-full" alt="" />
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">개발 과정(내가 맡은 부분)</h2>
                    <div className="text-[15px]">
                        <p>
                            - React와 Node.js를 깊이 있게 학습하고, 수업에서 배운 내용을 복습하여 기술 숙련도 향상에
                            중점을 두었음
                        </p>
                        <p>- 데이터 플로우 다이어그램 설정에 관한 회의에 참여하여 시스템 설계에 대한 이해를 도모함</p>
                        <p>- 페이지 별로 역할 배분(Main, Admin page 담당)</p>
                        <p>- 전체 디렉터리 구조와 환경을 설계하고 설정, 유지보수가 용이한 코드베이스를 확립</p>
                        <p>
                            - CSS-in-JS 방식(styled-components)을 통한 스타일링을 적용하여 유연하고 재사용 가능한 스타일
                            구조를 구축함
                        </p>
                        <p>
                            - Board Page에서 게시판 CRUD (생성, 읽기, 수정, 삭제) 기능을 구현하여 앱의 상호작용성 향상에
                            기여함
                        </p>
                        <p>- Sequelize ORM과 MySQL을 활용하여 백엔드에서의 데이터 처리와 데이터베이스 관리를 수행함</p>
                        <p>
                            - Redux Toolkit의 createSlice 및 createAsyncThunk를 사용하여 효율적인 상태 관리 및 비동기
                            작업을 처리함
                        </p>
                        <p>중첩된 댓글 및 대댓글 기능을 구현하여 사용자 참여도와 상호작용을 증대시킴</p>
                        <p>
                            - ThemeProvider와 useContext 훅을 사용하여 다크 모드 기능을 구현함으로써, 다양한 사용
                            환경에서의 UI 경험을 개선함
                        </p>
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">학습 내용</h2>
                    <div className="text-[15px]">
                        <p>- 초기에 디렉터리 구조 설정에 정성을 더 쏟아야 추후 팀 작업이 편해진다는 점</p>
                        <p>- styled-components 숙련도</p>
                        <p>- 게시판 CRUD 로직 개념</p>
                        <p>- reduxjs/toolkit 활용 개념</p>
                        <p>- 다크모드 기능 구현 로직</p>
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">결과</h2>
                    1) 사이트 녹화
                    <ReactPlayer url={steam100VOD} playing={true} controls={true} />
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
                                <div className="h-[80%]">
                                    <img src={process.env.PUBLIC_URL + '/Steam1001.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%]">
                                    <img src={process.env.PUBLIC_URL + '/Steam1002.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%]">
                                    <img src={process.env.PUBLIC_URL + '/Steam1003.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%]">
                                    <img src={process.env.PUBLIC_URL + '/Steam1004.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%]">
                                    <img src={process.env.PUBLIC_URL + '/Steam1005.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%]">
                                    <img src={process.env.PUBLIC_URL + '/Steam1006.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%]">
                                    <img src={process.env.PUBLIC_URL + '/Steam1007.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%]">
                                    <img src={process.env.PUBLIC_URL + '/Steam1008.png'} className="" alt="" />
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
                        href="https://blog.naver.com/jisub44/223191519894"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 삭제 버튼에 매개변수를 전달하지 않아 생겼던 문제 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223191175661"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - postId를 제대로 가져오지 못했던 건 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223187922045"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 새로고침하면 로그인 상태가 변경되던 문제 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223187215472"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 닉네임을 꺼내올 수 없었던 문제 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223181217432"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 버튼 숨기는 방법 (Click)
                    </a>
                    <br />
                </div>
            </div>
        </>
    )
}
