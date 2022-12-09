import React, { useState } from 'react';
import Wpp from '../../Assets/Wallpaper.svg';
import Lomba from '../../Assets/Lomba/Lomba.svg';
import Seminar from '../../Assets/Seminar/Seminar.svg';
import Beasiswa from '../../Assets/Beasiswa/Beasiswa.svg';
import Oprec from '../../Assets/Oprec/Oprec.svg';
import { Link } from 'react-router-dom'
import './Home.css'

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
            <div className='w-100 h-100 position-fixed d-flex justify-content-center align-items-center' style={loadStyle}>
                <span className="h3">Loading</span>
            </div>
            <div className="d-flex" style={{backgroundImage:`url(${Wpp})`,backgroundSize:'cover', zIndex:'0'}}>
                <div style={{zIndex:'1'}}>
                    <p className="home-judul">Lomba Terbaru</p>
                        {/* {
                            Poster && Poster.map((val, idx) =>
                            <div key={idx} className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            )
                        } */}
                    <div className='home-posters'>
                        <div className='row'>
                            <Link to='/description-lomba' className='nav-click col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='nav-click col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='nav-click col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                            <Link to='/description-lomba' className='nav-click col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </Link>
                        </div>
                    </div>

                    <p className="home-judul">Seminar Terbaru</p>
                    <div className='home-posters'>
                        <div className='row'>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Seminar})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Seminar})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Seminar})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Seminar})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                        </div>
                    </div>

                    <p className="home-judul">Beasiswa Terbaru</p>
                    <div className='home-posters'>
                        <div className='row'>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Beasiswa})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Beasiswa})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Beasiswa})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Beasiswa})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                        </div>
                    </div>

                    <p className="home-judul">Open Recruitment</p>
                    <div className='home-posters'>
                        <div className='row'>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Oprec})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Oprec})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Oprec})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Oprec})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home