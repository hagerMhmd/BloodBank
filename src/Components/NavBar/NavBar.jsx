/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Imgs/blood bank-2-01.png'
import style from './style.module.css'

export default function NavBar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark py-4 bg-dark fixed-top">
            <div className="container-fluid">
                <div className="ms-lg-5 ms-3">
                    <img src={logo} className={style.logo} alt="" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fs-5 me-lg-5 me-3" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to='/about'>About Donating</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to='/supportus'>Donate Blood</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to='/home'>Host a Blood Drive</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
