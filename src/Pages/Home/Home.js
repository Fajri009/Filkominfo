import React, { useState } from 'react';
import Wpp from '../../Assets/Wallpaper.svg';
import Lomba from '../../Assets/Lomba/Lomba.svg';
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
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                        </div>
                    </div>

                    <p className="home-judul">Seminar Terbaru</p>
                        {/* {
                            Poster && Poster.map((val, idx) =>
                            <div key={idx} className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            )
                        } */}
                    <div className='home-posters'>
                        <div className='row'>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                            <div className='col-3'>
                                <div className='home-poster' style={{backgroundImage: `url(${Lomba})`, backgroundSize:'cover', aspectRatio:'7/10'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home