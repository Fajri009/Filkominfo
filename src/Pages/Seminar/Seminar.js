import React from 'react';
import { Link } from 'react-router-dom'
import '../../Components/Nav/Nav.css'

const Seminar = () => {
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
                                <li>Home</li>
                            </Link>
                            <Link to='/lomba' className='nav-click'>
                                <li>Lomba</li>
                            </Link>
                            <Link to='/beasiswa' className='nav-click'>
                                <li >Beasiswa</li>
                            </Link>
                            <Link to='/seminar' className='nav-click'>
                                <li className='nav-active'>Seminar</li>
                            </Link>
                            <Link to='/oprec' className='nav-click'>
                                <li >Open Recruitment</li>
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
            
            <h1>Seminar Page</h1>
        </>
    )
}

export default Seminar;