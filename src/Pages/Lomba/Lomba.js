import React from 'react';
import Wpp from '../../Assets/Wallpaper.svg';
import Poster1 from '../../Assets/Poster/Poster1.svg';
import Poster2 from '../../Assets/Poster/Poster2.svg';
import Poster3 from '../../Assets/Poster/Poster3.svg';
import { Link } from 'react-router-dom'
import './Lomba.css'

const Lomba = () => {
    return (
        <>
            <div className='w-100 align-items-start' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0'}}>
                <div className='row w-100'>
                    <div className='col-1'>
                        <p>Logo</p>
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <ul>
                            <Link to='/' className='lomba-click'>
                                <li >Home</li>
                            </Link>
                            <Link to='/lomba' className='home-click'>
                                <li className='lomba-active'>Lomba</li>
                            </Link>
                            <Link to='/beasiswa' className='lomba-click'>
                                <li>Beasiswa</li>
                            </Link>
                            <Link to='/seminar' className='lomba-click'>
                                <li>Seminar</li>
                            </Link>
                            <Link to='/oprec' className='lomba-click'>
                                <li>Open Recruitment</li>
                            </Link>
                            <Link to='/karya' className='lomba-click'>
                                <li>Karya</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='col-1'>
                        <div className=''>
                            <p>Login</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex" style={{backgroundImage:`url(${Wpp})`,backgroundSize:'cover', zIndex:'0'}}>
                <div style={{zIndex:'1'}}>
                    <p className="lomba-judul">Nasional</p>
                    <div className='lomba-posters'>
                        <div className='row'>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster1})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="lomba-judul">Provinsi</p>
                    <div className='lomba-posters'>
                        <div className='row'>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="lomba-judul">Kota</p>
                    <div className='lomba-posters'>
                        <div className='row'>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='col-3'>
                                <div className='lomba-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lomba;