import React from 'react';
import Slider from 'react-slick';
import Wpp from '../../Assets/Wallpaper.svg';
import Logo from '../../Assets/Logo.png'
import Poster1 from '../../Assets/Poster/Poster1.svg';
import Poster2 from '../../Assets/Poster/Poster2.svg';
import Poster3 from '../../Assets/Poster/Poster3.svg';
import { Link } from 'react-router-dom';
import '../../Components/Nav/Nav.css';
import '../Style.css';

const Lomba = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slideToShow: 4,
        slideToScroll: 1
    }

    return (
        <>
            <div className='w-100 align-items-start' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0', position:'sticky', zIndex: '100'}}>
                <div className='row w-100'>
                    <div className='col-1'>
                        <img src={Logo} alt='logo' className='nav-logo'></img>
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <ul>
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
                        </ul>
                    </div>
                    <div className='col-1'>
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <p className='nav-login'>Login</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="d-flex" style={{backgroundImage:`url(${Wpp})`,backgroundSize:'cover', zIndex:'0', paddingBottom: '50px'}}>
                <div style={{zIndex:'1'}}>
                    <p className="style-judul">Nasional</p>
                    <div className='style-posters'>
                        <div className='row'>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="style-judul">Provinsi</p>
                    <div className='style-posters'>
                        <div className='row'>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="style-judul">Kota</p>
                    <div className='style-posters'>
                        <div className='row'>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
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