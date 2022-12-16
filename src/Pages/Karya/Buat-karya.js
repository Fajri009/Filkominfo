import React, { useState } from 'react';
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'
import Wpp from '../../Assets/Wallpaper.svg';
import '../../Components/Nav/Nav.css'
import './Buat-karya.css'

const Buatkarya = () => {
    const [resp, setResp] = useState('nav-menu');
    const [image, setImage] = useState();

    const navToggle = () => {
        resp === 'nav-menu' ? setResp('nav-menu nav-resp') : setResp('nav-menu')
    }

    const imageHandler = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <>
            <div className='w-100 align-items-start' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0', position:'sticky', zIndex: '100'}}>
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
                                    <li className='nav-active'>Karya</li>
                                </Link>
                                <Link to='/login' style={{textDecoration: 'none'}}>
                                    <p className='nav-login-resp'>Login</p>
                                </Link>
                        </ul>
                    </div>
                    
                    <div className='col-md-2 col-lg-2 col-xl-1 '>
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
            
            <div style={{backgroundImage:`url(${Wpp})`,backgroundSize:'cover', zIndex:'0', paddingBottom: '200px'}}>
            <div style={{zIndex:'1'}}>
                    <div className='d-flex align-items-end justify-content-center karya-fadeInUp'>
                        <div className='karya-template justify-content-center row' style={{marginTop:'80px'}}>
                            <div className='col-12 col-md-4 karya-poster d-flex justify-content-center row'>
                                <p className='d-flex align-items-center justify-content-center' style={{height:'50px', marginTop:'50px'}}>Poster karya</p>
                                <label>
                                    <input type='file' onChange={imageHandler} name='addImage' accept='image/*'></input>
                                    <img src={image} style={{width:'100%'}}/>
                                </label>
                            </div>
                            <div className='col-12 col-md-8 d-flex justify-content-center'>
                                <form style={{width:'70%', marginTop:'50px'}}>
                                    <label for='karya-judul' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Judul Karya</label>
                                    <input type='text' placeholder='Judul Karya' className='karya-input' id='karya-judul' required/>

                                    <label for='karya-deskripsi' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Deskripsi Karya</label>
                                    <textarea type='deskripsi' placeholder='Deskripsi Karya' className='karya-input karya-' id='karya-email' style={{height:'200px'}} required/>

                                    <label for='karya-datetime' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Tanggal Dibuat</label>
                                    <input type='datetime-local' className='karya-input' id='karya-datetime' required/>

                                    <label for='karya-team' className='d-flex align-items-end justify-content-center' style={{marginBottom:'10px'}}>Team</label>
                                    <textarea type='file' placeholder='Nama Anggota' className='karya-input' id='karya-team' accept='application/pdf' required style={{backgroundColor:'white', fontSize:'21px'}}/>
                                
                                    <button className='karya-submit' style={{marginTop:'10px', marginLeft:'25%', width:'50%', height:'50px', marginBottom:'40px'}}>
                                    <p style={{marginTop:'5px', fontWeight:'800'}}>Submit</p>
                                </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buatkarya;