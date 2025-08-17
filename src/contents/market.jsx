import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default function Market() {
    return (
        <>
            <div>
                <div className="lg:w-[800px] h-[100px] m-auto">
                    <h2 className="font-bold text-xl">일시</h2>
                    <p>2023년 06월 05일 ~ 2023년 06월 26일</p>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">프로젝트 목적</h2>
                    <p>
                        1) 수업에서 배웠던 Javascript와 Node.js를 최대한 복습하여, 기술 숙련도를 향상시키는 것
                        <br />
                        2) 당근마켓의 기능과 최대한 유사하게 구현하는 것.
                    </p>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">시나리오</h2>
                    <h2>1) 기술스택</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/marketStack.png'} className="h-full" alt="" />
                    </div>
                    <br />
                    <br />
                    <h2>2) 플로우 차트</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/marketDiagram.png'} className="h-full" alt="" />
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">개발 과정(내가 맡은 부분)</h2>
                    <div className="text-[15px]">
                        <p>- 데이터 플로우 다이어그램 설정에 관한 회의에 참여하여 시스템 설계에 대한 이해를 도모함</p>
                        <p>- 페이지 별로 역할 배분(Main, Mypage, SignUp & Login, 전체 CSS 담당)</p>
                        <p>- 지역 별로 회원 가입 할 수 있게 구현함</p>
                        <p>- 비밀번호에 정규식을 넣어 12자리이상 특수문자, 대문자, 소문자 전부 넣어야하게 구현</p>
                        <p>- 로그인 할 때 메인페이지에서 팝업 창을 통해 껏다 켰다 할 수 있게 구현</p>
                        <p>
                            - 게시판에 AWS S3를 활용하여 이미지는 인터넷에 업로드가 되고 DB에는 링크만 저장되어 들어갈
                            수 있게 구현
                        </p>
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">학습 내용</h2>
                    <div className="text-[15px]">
                        <p>- AWS S3를 활용한 다중 이미지 저장 방법</p>
                        <p>- txt방식의 이미지 저장 방법</p>
                        <p>- axios 개념 및 사용 방법</p>
                        <p>- Node.js로 게시판 CRUD 생성 방법</p>
                        <p>- MVC 패턴의 이해 및 사용</p>
                    </div>
                    <br />
                    <br />
                    <h1 className="font-bold text-xl">결과 & AWS S3 관련 오류</h1>
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
                                    <img src={process.env.PUBLIC_URL + '/Market11.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/Market22.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[70%]">
                                    <img src={process.env.PUBLIC_URL + '/Market1.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full">
                                    <img src={process.env.PUBLIC_URL + '/Market2.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[50%]">
                                    <img src={process.env.PUBLIC_URL + '/Market3.png'} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">또 다른 관련 프로젝트 시행착오 기록 링크</h2>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223136600198"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 이미지가 저장될 때 파일명이 너무 길어서 mysql이 터지는 건에 대하여 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223126780667"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 자기 게시물만 보이게 하기 안된 이유 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223127679457"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - post, get 로직에 대한 이해 (Click)
                    </a>
                    <br />
                </div>
            </div>
        </>
    )
}
