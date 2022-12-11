import React, { useState } from 'react';

import Wpp from '../../Assets/Wallpaper.svg';
import { Link } from 'react-router-dom'
import '../../Components/Nav/Nav.css'
import './Login.css'

const Login = () => {
    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin123'
    }

    const [user, setUser] = useState({name: '', email: ''});
    const [error, setError] = useState('');

    const Login = details => {
        console.log(details)
    }

    const Logout = () => {
        console.log('Logout')
    }
    return (
        <>
            <div className='w-100 align-items-start' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0'}}>
                <div className='row w-100'>
                    <div className='col-1'>
                        <p>Logo</p>
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <ul>
                            <Link to='/' className='nav-click'>
                                <li >Home</li>
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
            <div className="" style={{backgroundImage:`url(${Wpp})`,backgroundSize:'cover', zIndex:'0', paddingBottom: '200px'}}>
                <div style={{zIndex:'1'}}>
                    <div className='d-flex align-items-end justify-content-center'>
                        <div className='login-template align-items-end justify-content-center row' style={{marginTop:'80px'}}>
                            <p className='login-logo d-flex justify-content-center'>Logo here</p>

                            <form style={{width:'70%', marginTop:'50px'}}>
                                <label for='login-email' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Email address</label>
                                <input type='email' className='login-input' id='login-email' placeholder='Email' required/>

                                <label for='login-email' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Password</label>
                                <input type='password' className='login-input' id='login-password' placeholder='Password' required/>

                                <button className='align-self-center' style={{marginTop:'60px',width:'50%'}}>
                                    <p>Login</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;