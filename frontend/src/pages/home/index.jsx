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
import OngListada from '../../components/ongListada/ongListada.jsx'



import Informacao from '/src/assets/images/imageInfo.png'
import Cao from '/src/assets/images/cao.png'
import Doar from '/src/assets/images/doar.png'
import Caramelo from '/src/assets/images/caramelo.png'
import Crianca from '/src/assets/images/crianca.png'
import Amigos from '/src/assets/images/amigos.png'
import { useEffect, useState } from 'react'
import { FaBullseye, FaEye, FaLeaf } from 'react-icons/fa'
import Ongs from '../Ongs/Ongs.jsx'

export default function App() {

    const [logado, setLogado] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)
        let nomeUser = localStorage.getItem("USUARIO")
        if (nomeUser == undefined || nomeUser == null) {
            setLogado(false)
        }

        else {
            setLogado(true)
        }

    }, [])



    return (
        <div>

            {logado ? null : null}
             <Cabecalho />


            <main className='container_pagPrincipal'>

                <div className="container_central">
                   

                    <div>

                        <div className="container_infromacao">
                            <div className='text_princi'>
                            <h2><span className='destaque'>DoNNet</span></h2>
                            <h1>     faça do mundo um lugar melhor</h1>
                            </div>

                            <div className="Botoes_central">

                                {!logado &&
                                    <div>
                                        <Link className='doar' to={'/ongs'} style={{
                                            width: '130px',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            fontWeight: '800'
                                        }}>ONGS</Link>
                                        <Link className='login' to={'/login'}>LOGIN</Link>
                                    </div>
                                }


                                {logado &&
                                    <div>
                                        <Link className='doar' to={'/ongs'} style={{
                                            width: '200px',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            fontWeight: '800'
                                        }}>ONGS</Link>

                                    </div>
                                }

                            </div>
                        </div>

                        <div className="container_img">
                            <img src={Informacao} alt="Informação" />
                        </div>

                    </div>

                </div>
            </main>


            <section>



                <div className="carousel-container">
                    <h1 style={{textShadow:" -1px 1px 1px rgb(129, 129, 224)"}}>Para quem doar</h1>
                    
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        breakpoints={{
                            2040: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 3, spaceBetween: 20 },
                            940: { slidesPerView: 3, spaceBetween: 20 },
                            740: { slidesPerView: 2, spaceBetween: 20 },
                            1: { slidesPerView: 1, spaceBetween: 2000 },
                        }}

                    >
                        <SwiperSlide>
                            {/* <div className="slide">
                                <img src={cao} alt="Slide 1" />
                                <h3>Cão sem dono</h3>
                                <p>Criada com o incentivo de tirar o maximo de animais das ruas</p>
                            </div> */}
                            <div className='slide'>
                                <Link to='/caosemdono' style={{ textDecoration: 'none', color: 'black' }}>
                                <OngListada
                                imagem={Cao}
                                nome="Cão sem dono"
                                mensagem="Criada com o incentivo de tirar o maximo de animais das ruas."
                                />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            {/* <div className="slide">
                                <img src={caramelo} alt="Slide 2" />
                                <h3>Instituto Caramelo</h3>
                                <p>Instituto Caramelo: ONG brasileira que resgata, trata e disponibiliza animais em situação de risco para adoção.
                                </p>
                            </div> */}
                            <div className='slide'>
                                <Link to='/institutoCaramelo' style={{ textDecoration: 'none', color: 'black' }}>
                                <OngListada
                                imagem={Caramelo}
                                nome="Instituto Caramelo"
                                mensagem="Instituto Caramelo: ONG brasileira que resgata, trata e disponibiliza animais em situação de risco para adoção."
                                />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            {/* <div className="slide">
                                <img src={Amigos} alt="Slide 3" />
                                <h3>Amigos do bem</h3>
                                <p>SO Amigos do Bem é uma ONG brasileira que combate a fome e a miséria no sertão nordestino por meio de projetos de educação, geração de renda e saúde. </p>
                            </div> */}
                            <div className='slide'>
                                <Link to='/amigosDoBem' style={{ textDecoration: 'none', color: 'black' }}>
                                <OngListada
                                imagem={Amigos}
                                nome="Amigos do bem"
                                mensagem="SO Amigos do Bem é uma ONG brasileira que combate a fome e a miséria no sertão nordestino por meio de projetos de educação, geração de renda e saúde."
                                />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            {/* <div className="slide">
                                <img src={Doar} alt="Slide 4" />
                                <h3>Para quem doar</h3>
                                <p>é uma plataforma que conecta doadores a diversas iniciativas checadas</p>
                            </div> */}
                            <div className='slide'>
                                <Link to='/paraQuemDoar' style={{ textDecoration: 'none', color: 'black' }}>
                                <OngListada
                                imagem={Doar}
                                nome="Para quem doar"
                                mensagem="é uma plataforma que conecta doadores a diversas iniciativas checadasé uma plataforma que conecta doadores a diversas iniciativas checadas."
                                />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            {/* <div className="slide">
                                <img src={Crianca} alt="Slide 5" />
                                <h3>Crianca Esperança</h3>
                                <p>Criada em 1986 para mobilizar o público em prol dos direitos da criança e do adolescente</p>
                            </div> */}
                            <div className='slide'>
                                <Link to='/criancaEsperanca' style={{ textDecoration: 'none', color: 'black' }}>
                                <OngListada
                                imagem={Crianca}
                                nome="Crianca Esperança"
                                mensagem="Criada em 1986 para mobilizar o público em prol dos direitos da criança e do adolescente"
                                />
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <Link className="doar" to='/ongs' style={{ textDecoration: 'none', color: 'white', fontWeight:"bold", textShadow:" -1px 1px 1px rgb(129, 129, 224)"}}>
                        <p className="doar">Ver todas &gt;</p>
                    </Link>
                </div>


            </section>

            <section className='secao_sobre'>

                <div className="pag_sobre">

                    <h1>Sobre <strong>DonNet</strong></h1>
                    <p>
                        Esta Central de Doações foi concebida e desenvolvida como o principal produto do nosso Trabalho de Conclusão de Curso, integralmente realizado no contexto do curso de Informatica do Instituto Nossa Senhora de Fatima.

                        A gênese deste projeto reside na identificação e criação de ongs. Nosso principal objetivo é estabelecer uma ponte digital robusta e transparente, que não apenas simplifique o processo de contribuição para o doador, mas também garanta que os recursos cheguem de forma eficaz e segura às entidades e indivíduos necessitados.

                        Ao longo desta pesquisa e desenvolvimento, aplicamos metodologias de Engenharia de Software para construir uma solução escalável e sustentável. Esta central é, portanto, a materialização da nossa dedicação acadêmica, servindo como um modelo prático de como a inovação tecnológica pode impulsionar a responsabilidade social corporativa e comunitária.
                    </p>

                    <div className="blocos-info">
                        <div className="bloco">
                            <FaBullseye className="icone" />
                            <h3>Missão</h3>
                            <p>Promover o bem-estar e o desenvolvimento social, conectando e mobilizando pessoas e instituições em uma rede de solidariedade que transforma vidas.</p>
                        </div>

                        <div className="bloco">
                            <FaEye className="icone" />
                            <h3>Visão</h3>
                            <p>Ser referência nacional em conexões solidárias, inspirando confiança, engajamento e transformação através do uso consciente da tecnologia.</p>
                        </div>

                        <div className="bloco">
                            <FaLeaf className="icone" />
                            <h3>Valores</h3>
                            <ul>
                                <li>Solidariedade</li>
                                <li>Transparência</li>
                                <li>Empatia</li>
                                <li>Colaboração</li>
                                <li>Inovação social</li>
                                <li>Sustentabilidade</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </section>




            <Rodape />


        </div>
    )
}
