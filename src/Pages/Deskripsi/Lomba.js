import React from 'react';
import { Link } from 'react-router-dom'
import '../Lomba/Lomba.css'

const Lomba = () => {
    return (
        <>
            <div className='w-100 align-items-start' style={{height: '70px', backgroundColor: '#FFEBAD', left: '0', top: '0'}}>
                <div className='row w-100'>
                    <div className='col-1'>
                        <p>Logo</p>
                    </div>
                    <div className='col-10 d-flex justify-content-center'>
                        <ul>
                            <Link to='/' className='lomba-click'>
                                <li >Home</li>
                            </Link>
                            <Link to='/lomba' className='home-click'>
                                <li className='lomba-active'>Lomba</li>
                            </Link>
                            <Link to='/beasiswa' className='lomba-click'>
                                <li>Beasiswa</li>
                            </Link>
                            <Link to='/seminar' className='lomba-click'>
                                <li>Seminar</li>
                            </Link>
                            <Link to='/oprec' className='lomba-click'>
                                <li>Open Recruitment</li>
                            </Link>
                            <Link to='/karya' className='lomba-click'>
                                <li>Karya</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='col-1'>
                        Login
                    </div>
                </div>
            </div>
            <h1 className="d-flex align-items-end">Description Lomba Page</h1>
        </>
    )
}

export default Lomba;