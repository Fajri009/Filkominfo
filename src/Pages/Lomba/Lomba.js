import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-slideshow-image/dist/styles.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Data from '../../Assets/Data/Data.js'
import Wpp from '../../Assets/Wallpaper.svg';
import Logo from '../../Assets/Logo.png'
import Poster1 from '../../Assets/Poster/Poster1.svg';
import Poster2 from '../../Assets/Poster/Poster2.svg';
import Poster3 from '../../Assets/Poster/Poster3.svg';
import { Link } from 'react-router-dom';
import '../../Components/Nav/Nav.css';
import '../Style.css';

const Lomba = () => {
    const [resp, setResp] = useState('nav-menu');

    const navToggle = () => {
        resp === 'nav-menu' ? setResp('nav-menu nav-resp') : setResp('nav-menu')
    }

    return (
        <>
            <div className='w-100 align-items-start' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0', position:'sticky', zIndex: '1000'}}>
                <div className='row' style={{width: '100%'}}>
                    <div className='col-1 '>
                        <img src={Logo} alt='logo' className='nav-logo'></img>
                    </div>
                    <div className='col-md-9 col-lg-9 col-xl-10 d-flex justify-content-center '>
                        <ul className={`nav-list ${resp}`}>
                                <Link to='/' className='nav-click'>
                                    <li>Home</li>
                                </Link>
                                <Link to='/lomba' className='nav-click'>
                                    <li className='nav-active'>Lomba</li>
                                </Link>
                                <Link to='/beasiswa' className='nav-click'>
                                    <li>Beasiswa</li>
                                </Link>
                                <Link to='/seminar' className='nav-click'>
                                    <li>Seminar</li>
                                </Link>
                                <Link to='/oprec' className='nav-click'>
                                    <li>Open Recruitment</li>
                                </Link>
                                <Link to='/karya' className='nav-click'>
                                    <li>Karya</li>
                                </Link>
                                <Link to='/login' style={{textDecoration: 'none'}}>
                                    <p className='nav-login-resp'>Login</p>
                                </Link>
                        </ul>
                    </div>
                    
                    <div className='col-md-2 col-lg-2 col-xl-1 '>
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <p className='nav-login'>Login</p>
                        </Link>
                    </div>
                    
                    <div className='row w-100'>
                        <div className='col-11'>
                            <img src={Logo} alt='logo' className='nav-logo2'></img>
                        </div>
                        <div onClick={navToggle} className='nav-toggle col-1' style={{marginTop: '12px'}}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex" style={{backgroundImage:`url(${Wpp})`,backgroundSize:'cover', zIndex:'0', paddingBottom: '50px', overflow:'hidden'}}>
                <div style={{zIndex:'1'}}>
                    <p className="style-judul fadeInLeftBig">Nasional</p>
                        <div className='style-posters fadeInRight'>
                        {/* <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='w-100'>
                                <Link to='/description-lomba'>
                                    <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                    <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                    <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                    <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                    <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                    <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                                </Link>
                            </SwiperSlide>
                        </Swiper> */}
                        <div className='row'>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="style-judul fadeInLeftBig">Provinsi</p>
                    <div className='style-posters fadeInRight'>
                        <div className='row'>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="style-judul fadeInLeftBig">Kota</p>
                    <div className='style-posters fadeInRight'>
                        <div className='row'>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-md-6 col-lg-4 col-xl-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lomba;