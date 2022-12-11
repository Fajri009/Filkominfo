import React, { useState } from 'react';
import Wpp from '../../Assets/Wallpaper.svg';
import Poster1 from '../../Assets/Poster/Poster1.svg';
import Poster2 from '../../Assets/Poster/Poster2.svg';
import Poster3 from '../../Assets/Poster/Poster3.svg';
import Poster4 from '../../Assets/Poster/Poster4.svg';
import Poster5 from '../../Assets/Poster/Poster5.svg';
import { Link } from 'react-router-dom'
import '../../Components/Nav/Nav.css'
import '../Style.css'

const Home = () => {
    const [loading, setLoading] = useState(true);
    setInterval(() => {
        setLoading(false);
    }, 300)

    const loadStyle = {
        top : (loading ? 0 : '-100vh'),
        zIndex : 10,
        transition : '0.3s',
        transitionTimingFunction : 'ease-in',
        backgroundColor : '#FFEBAD',
    }

    return (
        <>
            {/* <div className='w-100 h-100 position-fixed d-flex justify-content-center align-items-center' style={loadStyle}>
                <span className="h3">Loading</span>
            </div> */}
            <div className='w-100 align-items-start' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0'}}>
                <div className='row w-100'>
                    <div className='col-1'>
                        <p>Logo</p>
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <ul>
                            <Link to='/' className='nav-click'>
                                <li className='nav-active'>Home</li>
                            </Link>
                            <Link to='/lomba' className='nav-click'>
                                <li>Lomba</li>
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

            <div className="d-flex" style={{backgroundImage:`url(${Wpp})`,backgroundSize:'1519px', zIndex:'0'}}>
                <div style={{zIndex:'1'}}>
                    <p className="style-judul">Lomba Terbaru</p>
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

                    <p className="style-judul">Beasiswa Terbaru</p>
                    <div className='style-posters'>
                        <div className='row'>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster2})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="style-judul">Seminar Terbaru</p>
                    <div className='style-posters'>
                        <div className='row'>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster3})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="style-judul">Open Recruitment</p>
                    <div className='style-posters'>
                        <div className='row'>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster4})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster4})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster4})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster4})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="style-judul">Karya Mahasiswa</p>
                    <div className='style-posters'>
                        <div className='row'>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster5})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster5})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster5})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-beasiswa' className='col-3'>
                                <div className='style-poster' style={{backgroundImage: `url(${Poster5})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home