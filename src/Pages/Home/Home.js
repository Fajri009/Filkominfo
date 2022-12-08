import React, { useState } from 'react';
// import { ReactComponent as Wpp } from '../../Assets/Wallpaper.svg'
import Wpp from '../../Assets/Wallpaper.svg';
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
            <div className="d-flex align-items-start">
                <section className="position-absolute h-100 w-100" style={{left:'0',backgroundImage:`url(${Wpp})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
            </div>
        </>
    )
}

export default Home