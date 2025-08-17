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

export default function SpaceGame() {
    const spaceVideo = process.env.PUBLIC_URL + '/spaceVideo.mov'
    return (
        <>
            <div className="text-[15px]">
                <div className="lg:w-[800px] h-[100px] m-auto">
                    <h2 className="font-bold text-xl">일시</h2>
                    <p>2023. 04. 05 ~ 진행중</p>
                    <br />
                    <br />
                    {/* <h2 className="font-bold text-xl">열정에서 현실로 (블록체인 게임 개발기)</h2>
                    <p className="text-[15px]">
                        1) 자바스크립트말고는 아무것도 배우지 못한 상태에서 시작했습니다.
                        <br />
                        2) 그래서 Javascript와 canvas만으로 하드코딩했습니다.
                        <br />
                        3) 학원 다니는 동안 팀 프로젝트 기간 제외하고 매일 2시간 이상씩 꾸준히 개발했습니다.
                    </p>
                    <br />
                    <br /> */}
                    <h2 className="font-bold text-xl">열정에서 현실로 (개발 과정)</h2>
                    <h2>
                        <b>1) 초기에는 '코딩알려주는 누나'라는 유튜브 채널을 참고했습니다.</b>
                    </h2>
                    <div>
                        학습 관련 링크 1
                        <a
                            target="_blink"
                            href="https://blog.naver.com/jisub44/223065786632"
                            className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                        >
                            - 세 번째 개인 프로젝트(우주선 슈팅 게임 1탄)
                        </a>
                    </div>
                    <div>
                        학습 관련 링크 2
                        <a
                            target="_blink"
                            href="https://blog.naver.com/jisub44/223067873882"
                            className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                        >
                            - 세 번째 개인 프로젝트(우주선 슈팅 게임 2탄)
                        </a>
                    </div>
                    <div>
                        학습 관련 링크 3
                        <a
                            target="_blink"
                            href="https://blog.naver.com/jisub44/223067924042"
                            className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                        >
                            - 세 번째 개인 프로젝트(우주선 슈팅 게임 3탄)
                        </a>
                    </div>
                    <br />
                    <br />
                    <h2>
                        <b>2) 배운 내용을 응용하며 바꿔나가기 시작했습니다.</b>
                    </h2>
                    <div>
                        1. 캐릭터가 x축으로만 이동이 되던 형태에서 y축으로도 이동가능하게 변경 <br />
                        2. 총알을 발사해서 맞추면 스코어가 올라가던 형태에서 우주선이 적에게 충돌하면 스코어가 올라가게
                        변경 (적을 먹는 형태) <br />
                        3. 단순히 적군만 내려오던 형태에서 보스를 만들어서 보스에서 적을 낳는 형태로 변경 <br />
                        4. 펫(강아지, 고양이, 거북이)을 생성하여 각각의 특성과 스킬 부여 및 플레이어 스킬 부여 <br />
                        5. 플레이어가 적에게 충돌하면 hp가 깍이게 되는 형태로 변경(적을 먹는 형태 + 피하는 형태 혼합){' '}
                        <br />
                        6. Smartcontract와 연결하여 게임 토큰 개념 추가 <br />
                        7. 얻은 토큰으로 NFT를 구매할 수 있는 기능 추가
                    </div>
                    <br />
                    <br />
                    <h2>
                        <b>3) 결과물</b>
                    </h2>
                    <div>
                        <ReactPlayer url={spaceVideo} playing={true} controls={true} />
                    </div>
                    <br />
                    <br />
                    <h2>
                        <b>4) 수정 & 업데이트 방향</b>
                    </h2>
                    <div>
                        1. NFT 구매가 한 번의 클릭만으로 빠르고 자연스럽게 이루어지게 개선 <br />
                        2. 같은 NFT가 중복으로 올라가지는 현상 개선 필요 <br />
                        3. 랭킹에 대한 보상 개선 필요 <br />
                        4. 구입한 NFT를 게임안에 입히는 기능 <br />
                        5. 전체적인 토크노믹스 개선 필요 (사용처가 부족 인플레이션 우려) <br />
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">열정에서 현실로 (만들며 학습된 내용)</h2>
                    <div className="text-[15px]">
                        <p>- HTML5 Canvas 요소를 활용한 JavaScript 그래픽 제어 및 애니메이션 구현</p>
                        <p>- Javascript 실행컨텍스트, 콜스택 개념</p>
                        <p>- Javascript const, let, var 개념</p>
                        <p>- Javascript This 개념</p>
                        <p>- Javascript Class 개념</p>
                        <p>- Solidity Token 생성 및 적용 방법</p>
                        <p>- Solidity NFT 생성 및 적용 방법</p>
                    </div>
                    <br />
                    <br />
                    <h1 className="font-bold text-xl">열정에서 현실로 (진행하며 어려웠던 부분 & 느낀점)</h1>
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
                                    <img src={process.env.PUBLIC_URL + '/Space1.png'} className="" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[50%]">
                                    <img src={process.env.PUBLIC_URL + '/Space2.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[50%]">
                                    <img src={process.env.PUBLIC_URL + '/Space3.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[90%]">
                                    <img src={process.env.PUBLIC_URL + '/Space4.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[90%]">
                                    <img src={process.env.PUBLIC_URL + '/Space5.png'} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[60%]">
                                    <img src={process.env.PUBLIC_URL + '/Space6.png'} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">열정에서 현실로 (프로젝트 시행착오 기록 링크)</h2>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223204032157"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - setInterval 후에 clearInterval을 해주지 않으면 생기는 문제 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223156995581"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 보스들을 Class로 변경하고나서 터진 문제들에 대하여 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223117654515"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 업데이트 함수가 겹쳐서 작동이 안되던 건에 대해여 (Click)
                    </a>
                    <br />
                    <a
                        target="_blink"
                        href="https://blog.naver.com/jisub44/223082267443"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 일시정지했는데 잔몹이 나오는 것에 대하여 (Click)
                    </a>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">열정에서 현실로 (하고 싶은 말)</h2>
                    <div>
                        매일 학원에서 배운 내용 정리 다 하고 남는 시간마다 꾸준히 개발해 왔습니다. <br />
                        진심으로 개발자가 되고 싶습니다. <br />
                        부디 예쁘게 봐주시면 감사드리겠습니다.
                    </div>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">Github 주소</h2>
                    <br />
                    <a
                        target="_blink"
                        href="https://github.com/jisub12/SpaceDDongGame"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 우주 똥 피하기 게임 깃 허브 링크 (Click)
                    </a>
                    <br />
                    <br />
                    <h2 className="font-bold text-xl">직접 해보러 가기</h2>
                    <br />
                    <a
                        target="_blink"
                        href="https://jisub12.github.io/SpaceDDongGame/"
                        className="flex items-center gap-[5px] text-slate-600 mr-[20px]"
                    >
                        - 우주 똥 피하기 게임하러 가기 (Click)
                    </a>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
