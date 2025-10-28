import { Link } from 'react-router'

import './swiper.scss'
import './index.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'
import { Swiper, SwiperSlide } from 'swiper/react';


import Cabecalho from '../../components/cabecalho/Cabecalho.jsx'
import Rodape from '../../components/Rodape/Rodape.jsx'

import informacao from '/src/assets/images/imageInfo.png'
import cao from '/src/assets/images/cao.png'
import doar from '/src/assets/images/doar.png'
import caramelo from '/src/assets/images/caramelo.png'
import crianca from '/src/assets/images/crianca.png'
import amigos from '/src/assets/images/amigos.png'



export default function App() {
    return (
        <div>

            <Cabecalho />

            <main className='container_pagPrincipal'>

                <div className="container_central">



                    <div className="container_infromacao">
                        <h1><span className='destaque'>DonNet</span> faça do mundo um lugar melhor</h1>

                        <div className="Botoes_central">
                            <Link className='doar'>DOAR</Link>
                            <Link className='login'>LOGIN</Link>
                        </div>

                    </div>

                    <div className="container_img">
                        <img src={informacao} />
                    </div>






                </div>






            </main>

            <section >


                <div className="carousel-container">
                    <Swiper spaceBetween={20} slidesPerView={3} loop>
                        <SwiperSlide>
                            <div className="slide">
                                <img src={cao} alt="Slide 1" />
                                <h3>Praia paradisíaca</h3>
                                <p>Um lugar perfeito para relaxar e aproveitar o sol.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide">
                                <img src={caramelo} alt="Slide 2" />
                                <h3>Montanha nevada</h3>
                                <p>Paisagem incrível para quem ama frio e aventura.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide">
                                <img src={amigos} alt="Slide 3" />
                                <h3>Cidade moderna</h3>
                                <p>A mistura perfeita de cultura e tecnologia.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide">
                                <img src={doar} alt="Slide 4" />
                                <h3>Cidade moderna</h3>
                                <p>A mistura perfeita de cultura e tecnologia.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide">
                                <img src={crianca} alt="Slide 5" />
                                <h3>Cidade moderna</h3>
                                <p>A mistura perfeita de cultura e tecnologia.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


            </section>



            <Rodape />
        </div>
    )
}