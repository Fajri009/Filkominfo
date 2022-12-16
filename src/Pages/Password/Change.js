import React, { useState } from 'react';
import Logo from '../../Assets/Logo.png'
import Wpp from '../../Assets/Wallpaper.svg';
import { Link, useNavigate } from 'react-router-dom'
import '../../Components/Nav/Nav.css'
import '../Login/Login.css'

const Change = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login')
    }

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

            <div className="" style={{backgroundImage:`url(${Wpp})`,backgroundSize:'cover', zIndex:'0', paddingBottom: '200px'}}>
                <div style={{zIndex:'1'}}>
                    <div className='d-flex align-items-end justify-content-center login-fadeInUp'>
                        <div className='login-template align-items-end justify-content-center row' style={{marginTop:'80px'}}>
                            <img src={Logo} alt='logo' style={{width: '40%', marginTop:'50px'}}></img>

                            <form style={{width:'70%', marginTop:'50px'}}>
                                <label for='login-new-password' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>New Password</label>
                                <input type='password' className='login-input' id='login-new-password' placeholder='New Password' required/>

                                <label for='login-password' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Password</label>
                                <input type='password' className='login-input' id='login-password' placeholder='Password' required/>

                                <button type='button' className='login-submit' onClick={handleClick} style={{marginTop:'20px', marginLeft:'25%', width:'50%', height:'50px', marginBottom:'30px'}}>
                                    <p style={{marginTop:'5px', fontWeight:'800'}}>Change</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Change;