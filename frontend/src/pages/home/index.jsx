import { Link, useNavigate } from 'react-router'

import './swiper.scss'
import './index.scss'
import '/src/scss/global.scss'
import '/src/scss/fonts.scss'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';

import Cabecalho from '../../components/cabecalho/Cabecalho.jsx'
import Rodape from '../../components/Rodape/Rodape.jsx'



import informacao from '/src/assets/images/imageInfo.png'
import cao from '/src/assets/images/cao.png'
import doar from '/src/assets/images/doar.png'
import caramelo from '/src/assets/images/caramelo.png'
import crianca from '/src/assets/images/crianca.png'
import amigos from '/src/assets/images/amigos.png'
import { useEffect, useState } from 'react'

export default function App() {
    const [usuario, setUsuario] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        let nomeUser = localStorage.getItem("USUARIO")

        if (nomeUser == undefined || nomeUser == null) {
            navigate('/login')

        }
        else { setUsuario(nomeUser) }
    }, [])
    return (
        <div>


            <main className='container_pagPrincipal'>

                <div className="container_central">
                    <Cabecalho />
                    <div>
                        <div className="container_infromacao">
                            <h1><span className='destaque'>DonNet</span> faça do mundo um lugar melhor</h1>

                            <div className="Botoes_central">
                                <Link className='doar'>DOAR</Link>
                                <Link className='login'>LOGIN</Link>
                            </div>
                        </div>

                        <div className="container_img">
                            <img src={informacao} alt="Informação" />
                        </div>
                    </div>

                </div>
            </main>


            <section>
                <div className="carousel-container">
                    <h1>Para quem doar</h1>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={-20}
                        slidesPerView={3.8}
                        loop
                        breakpoints={{
                            1024: { slidesPerView: 3.6 },
                            768: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="slide">
                                <img src={cao} alt="Slide 1" />
                                <h3>Cão sem dono</h3>
                                <p>Criada com o incentivo de tirar o maximo de animais das ruas</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide">
                                <img src={caramelo} alt="Slide 2" />
                                <h3>Instituto Caramelo</h3>
                                <p>Instituto Caramelo: ONG brasileira que resgata, trata e disponibiliza animais em situação de risco para adoção.

                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide">
                                <img src={amigos} alt="Slide 3" />
                                <h3>Amigos do bem</h3>
                                <p>SO Amigos do Bem é uma ONG brasileira que combate a fome e a miséria no sertão nordestino por meio de projetos contínuos de educação, geração de renda e saúde. </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide">
                                <img src={doar} alt="Slide 4" />
                                <h3>Para quem doar</h3>
                                <p>é uma plataforma que conecta doadores a diversas iniciativas checadas</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide">
                                <img src={crianca} alt="Slide 5" />
                                <h3>Crianca Esperança</h3>
                                <p>criada em 1986 para mobilizar o público em prol dos direitos da criança e do adolescente</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


            </section>

            <section className='secao_sobre'>
                <div className="pag_sobre">
                    <h1>Sobre</h1>
                    <p>
                        Esta Central de Doações foi concebida e desenvolvida como o principal produto do nosso Trabalho de Conclusão de Curso (TCC), integralmente realizado no contexto do curso de [Nome do Seu Curso] do [Nome do Instituto/Faculdade].

                        A gênese deste projeto reside na identificação de [mencionar a lacuna ou o problema que o TCC resolve, ex: ineficiência na gestão de bens doados ou a falta de visibilidade das necessidades locais]. Nosso principal objetivo é estabelecer uma ponte digital robusta e transparente, que não apenas simplifique o processo de contribuição para o doador, mas também garanta que os recursos cheguem de forma eficaz e segura às entidades e indivíduos necessitados.

                        Ao longo desta pesquisa e desenvolvimento, aplicamos metodologias de [Mencionar brevemente a área de estudo, ex: Engenharia de Software, Gestão de Projetos ou Ciências Sociais Aplicadas] para construir uma solução escalável e sustentável. Esta central é, portanto, a materialização da nossa dedicação acadêmica, servindo como um modelo prático de como a inovação tecnológica pode impulsionar a responsabilidade social corporativa e comunitária.
                    </p>


                </div>
            </section>




            <Rodape />


        </div>
    )
}
