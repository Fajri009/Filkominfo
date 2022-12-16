import React, { useState } from 'react';
import Logo from '../../Assets/Logo.png'
import Wpp from '../../Assets/Wallpaper.svg';
import { Link } from 'react-router-dom'
import '../../Components/Nav/Nav.css'
import './Login.css'

const Login = () => {
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
                            <img src={Logo} alt='logo' style={{width: '40%', marginTop:'50px'}} />

                            <form style={{width:'70%', marginTop:'50px'}}>
                                <label for='login-email' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Email address</label>
                                <input type='email' className='login-input' id='login-email' placeholder='Email' required/>

                                <label for='login-password' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Password</label>
                                <input type='password' className='login-input' id='login-password' placeholder='Password' required/>

                                <button className='login-submit' style={{marginTop:'20px', marginLeft:'25%', width:'50%', height:'50px'}}>
                                    <p style={{marginTop:'5px', fontWeight:'800'}}>Login</p>
                                </button>

                                <p style={{fontWeight:'500', marginTop:'40px'}}>
                                    <Link to='/login/find-password' style={{textDecoration: 'none'}}>
                                        Lupa password?
                                    </Link>
                                </p>

                                <p style={{fontWeight:'500', marginTop:'-15px'}}>
                                    Belum punya akun? 
                                    <Link to='/signup' style={{textDecoration: 'none', marginLeft: '4px'}}>
                                        Signup
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;