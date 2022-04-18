import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Imgs/blood bank-2-01.png'
import style from './style.module.css'

export default function NavBar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark py-3 bg-dark fixed-top">
            <div className="container-fluid">
                <div className="ms-lg-5 ms-3">
                    <Link to='/home'><img src={logo} className={style.logo} alt="" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fs-5 me-lg-5 me-3" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active fs-6" aria-current="page" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fs-6" aria-current="page" to='/about'>About Donating</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fs-6" aria-current="page" to='/donatenow'>Donate Blood</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fs-6" aria-current="page" to='/bloodrequest'>Host a Blood Drive</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active fs-6" aria-current="page" to='/donors'>Donors</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link active fs-6" aria-current="page" to='/admin'>Admin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}