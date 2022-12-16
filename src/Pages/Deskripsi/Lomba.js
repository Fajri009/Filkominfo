import React, {useState} from 'react';
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'
import '../../Components/Nav/Nav.css'
import Poster1 from '../../Assets/Poster/Poster1.svg';
import Wpp from '../../Assets/Wallpaper.svg';
import './des-style.css'
import '../../Components/Nav/Nav.css'

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
                                <Link to='/login' style={{textDecoration: 'none'}}>
                                    <p className='nav-login-resp'>Login</p>
                                </Link>
                        </ul>
                    </div>
                    
                    <div className='col-md-2 col-lg-2 col-xl-1' style={{overflow: 'hidden'}}>
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
            <div className='des-container d-flex row' style={{paddingBottom:'60px', backgroundImage:`url(${Wpp})`, backGroundSize: 'cover',textDecoration: 'none', justifyContent:'center', paddingBottom: '30px'}}>
                <div className='des-image col-5' style={{ marginLeft: '120px', marginTop:'30px'}}>
                    <img src={Poster1}/>
                </div>
                <div className='des-desc col-7' style={{ width: '500px', backgroundColor: '#CFF5E7', borderRadius: '20px', marginRight: '60px', marginTop:'30px', marginBottom:'24px', marginLeft: '0px'}}>
                    <div className='des-title' style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '20px'}}>
                        Lomba Seminar Terbaru
                    </div>
                    <div className='des-paragh' style={{ textAlign: 'justify', marginTop: '20px', margin: '30px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lomba;