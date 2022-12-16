import React from 'react';
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'
import Wpp from '../../Assets/Wallpaper.svg';
import '../../Components/Nav/Nav.css'
import './Buat-karya.css'

const Buatkarya = () => {
    return (
        <>
            <div className='w-100 align-items-start' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0', position:'sticky', zIndex: '100'}}>
                <div className='row w-100'>
                    <div className='col-1'>
                        <img src={Logo} alt='logo' className='nav-logo'></img>
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <ul>
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
                                <li className='nav-active'>Karya</li>
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
            
            <div style={{backgroundImage:`url(${Wpp})`,backgroundSize:'cover', zIndex:'0', paddingBottom: '200px'}}>
                <div style={{zIndex:'1'}}>
                    <div className='d-flex align-items-end justify-content-center karya-fadeInUp'>
                        <div className='karya-template align-items-end justify-content-center row' style={{marginTop:'80px'}}>
                            <div className='col-12 col-md-8 d-flex justify-content-center'>
                                <form style={{width:'70%', marginTop:'50px'}}>
                                    <label for='karya-judul' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Judul karya</label>
                                    <input type='text' className='karya-input' id='karya-judul' required/>

                                    <label for='karya-deskripsi' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Deskripsi karya</label>
                                    <textarea type='deskripsi' className='karya-input karya-' id='karya-email' style={{height:'200px'}} required/>

                                    <label for='karya-datetime' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Tanggal Dibuat</label>
                                    <input type='datetime-local' className='karya-input' id='karya-datetime' required/>

                                    <label for='karya-team' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Team</label>
                                    <textarea type='deskripsi' className='karya-input' id='karya-email' style={{height:'200px'}} required/>

                                    <button className='karya-submit' style={{marginTop:'10px', marginLeft:'25%', width:'50%', height:'50px', marginBottom:'40px'}}>
                                    <p style={{marginTop:'5px', fontWeight:'800'}}>Submit</p>
                                </button>
                                </form>
                            </div>
                            <div className='col-12 col-md-4 karya-garis'>
                                <h1>karya2</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buatkarya;