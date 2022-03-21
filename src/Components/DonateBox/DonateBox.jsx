import React from 'react'
import { Link } from 'react-router-dom'
import style from './DonateBox.module.css'

export default function DonateBox() {
    return <>
        <div className={`${style.donateColor}`}>
            <div className="container text-white text-center">
                <div className="row">
                    <Link to='/about' className={`text-decoration-none m-0 p-0 text-white`}>
                        <div className={`${style.donatesHover} col-md-3`}>
                            <i className={`${style.donateIcon} py-5 fa-solid fa-hand-holding-medical text-white`}></i>
                            <h1 className='pb-5'>Blood Donor <br /> Basics</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </>
}
