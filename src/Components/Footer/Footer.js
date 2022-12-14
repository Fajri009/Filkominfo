import React from 'react';
import './Footer.css'
import Logo from '../../Assets/Logo.png'

const Footer = () => {
    return (
        <>
            <div style={{backgroundColor: '#FFEBAD', left: '0', top: '0', position:'sticky', zIndex: '100', borderRadius: '30px 30px 0 0', marginTop: '-30px'}}>
                <div className='row w-100'>
                    <div className='col-2'>
                        <img src={Logo} alt='logo' style={{width: '40%', marginLeft: 'auto', marginTop: '20px'}} className='d-flex'></img>
                    </div>
                    
                    <div className='col-1' style={{marginTop: '30px'}}>
                        <p className='footer-text'>About Us</p>
                        <p className='footer-text'>Contact Us</p>
                        <p className='footer-text'>Resource</p>
                    </div>
                    
                    <div className='col-12 d-flex justify-content-center align-items-end'>
                        <p className='footer-text'>©Copyright Filkominfo 2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;