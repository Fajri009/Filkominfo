import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='w-100' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0'}}>
            <div className='row w-100'>
                <div className='col-11'>
                    <ul className='nav-links'>
                        <Link to='/' className='nav-click'>
                            <li className='nav-home'>Home</li>
                        </Link>
                        <Link to='/lomba' className='nav-click'>
                            <li className='nav-text'>Lomba</li>
                        </Link>
                        <Link to='/beasiswa' className='nav-click'>
                            <li className='nav-text'>Beasiswa</li>
                        </Link>
                        <Link to='/Seminar' className='nav-click'>
                            <li className='nav-text'>Seminar</li>
                        </Link>
                        <Link to='/Oprec' className='nav-click'>
                            <li className='nav-text'>Open Recruitment</li>
                        </Link>
                        <Link to='/Karya' className='nav-click'>
                            <li className='nav-text'>Karya</li>
                        </Link>
                    </ul>
                </div>
                <div className='col-1'>
                    Login
                </div>
            </div>
        </div>
    )
}

export default Nav;