/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import style from './BloodType.module.css'
import img from '../../Imgs/Target-Your-Type.png'
import tagetVideo from '../../Imgs/Target Your Type _ OneBlood.mp4'
import wholeBlood from '../../Imgs/whole-blood-icon.png'
import doubleRed from '../../Imgs/double-red-icon.png'
import platelets from '../../Imgs/platelets-icon.png'
import plasma from '../../Imgs/plasma-icon.png'

export default function BloodType() {
    return <>
        <section className='py-5'>
            <div className="container pt-5">
                <div className="row pt-5 align-items-center">
                    <div className="col-md-5">
                        <div className="bloodType-items">
                            <div className="row">
                                <div className="col-md-10">
                                    <img src={img} className='img-fluid' alt="" />
                                    <h5 className={`${style.fontColor} py-4`}>There are eight different blood types and each one holds a unique power to save lives. OneBlood’s exclusive <span className='fw-bold fst-italic'>Target</span> Your <span className='fw-bold fst-italic'>Type®</span>  program shows donors how to give the most needed components of their blood by targeting how they donate. Click on the blood types below and learn how to unlock the power of your blood type and save more lives.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-0 offset-md-1">
                        <div className="blood-type-video">
                            <video controls className='w-100' src={tagetVideo} ></video>
                            <div className="row">
                                <div className="col-md-5 py-2">
                                    <p>Target Your Type October 1, 2013</p>
                                </div>
                                <div className="col-md-5 offset-0 offset-md-1">
                                    <div className={`${style.shareIcons} d-flex`}>
                                        <h6 className='text-primary pt-2 pe-4'>SHARE</h6>
                                        <i className="fa-brands fs-4 px-2 py-1 text-primary fa-facebook-square"></i>
                                        <i className="fa-brands fs-4 px-2 py-1 text-info fa-twitter-square"></i>
                                        <i className="fa-brands fs-4 px-2 py-1 text-danger fa-google-plus-square"></i>
                                        <i className="fa-brands fs-4 px-2 py-1  text-danger fa-pinterest-square"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='bloodType' className={`${style.sectionColor} my-5`}>
            <div className="container">
                <div className="row text-center justify-content-start justify-content-md-center">
                    <div className="col-lg-3 type-o- col-md-5 col-sm-6 p-5 p-md-4">
                        <Link className='text-decoration-none text-white' to='/onegative'>
                            <h1 className='p-5'>O-</h1>
                        </Link>
                    </div>
                    <div className="col-lg-3 type-o-positive col-md-5 col-sm-6 p-5 p-md-4">
                        <Link className='text-decoration-none text-white' to='/opositive'>
                            <h1 className='p-5'>O+</h1>
                        </Link>
                    </div>
                    <div className="col-lg-3 type-a- col-md-5 col-sm-6 p-5 p-md-4">
                        <Link className='text-decoration-none text-white' to='/anegative'>
                            <h1 className='p-5'>A-</h1>
                        </Link>
                    </div>
                    <div className="col-lg-3 type-a-positive col-md-5 col-sm-6 p-5 p-md-4">
                        <Link className='text-decoration-none text-white' to='/apositive'>
                            <h1 className='p-5'>A+</h1>
                        </Link>
                    </div>
                    <div className="col-lg-3 type-b- col-md-5 col-sm-6 p-5 p-md-4">
                        <Link className='text-decoration-none text-white' to='/bnegative'>
                            <h1 className='p-5'>B-</h1>
                        </Link>
                    </div>
                    <div className="col-lg-3 type-b-positive col-md-5 col-sm-6 p-5 p-md-4">
                        <Link className='text-decoration-none text-white' to='/bpositive'>
                            <h1 className='p-5'>B+</h1>
                        </Link>
                    </div>
                    <div className="col-lg-3 type-ab- col-md-5 col-sm-6 p-5 p-md-4">
                        <Link className='text-decoration-none text-white' to='/abnegative'>
                            <h1 className='p-5'>AB-</h1>
                        </Link>
                    </div>
                    <div className="col-lg-3 type-ab-positive col-md-5 col-sm-6 p-5 p-md-4 ">
                        <Link className='text-decoration-none text-white' to='/abpositive'>
                            <h1 className='p-5'>AB+</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-5 text-center'>
            <div className="container">
                <div className="DonaionMethodsTitle d-flex flex-column justify-content-center align-items-center">
                    <h2 className='py-2 table'>Donation Methods</h2>
                    <div className="brdr"></div>
                    <p className='py-2 fs-5'> more than one way to give blood. Let your blood type lead the way in targeting the best way for you to donate your powerful lifesaving gift.</p>
                </div>
                <div className="row text-white">
                    <div className="col-lg-3 col-md-6 mb-3">
                            <div className="bloodMethods py-3">
                                <img src={wholeBlood} className='w-25 pt-3' alt="" />
                                <h4 className='pt-3 text-uppercase'>Whole Blood <br /> Donation</h4>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                            <div className="bloodMethods py-3">
                                <img src={doubleRed} className='w-25 pt-3' alt="" />
                                <h4 className='pt-3 text-uppercase'>Double Red <br /> Cell Donation</h4>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                            <div className="bloodMethods py-3">
                                <img src={platelets} className='w-25 pt-3' alt="" />
                                <h4 className='pt-3 text-uppercase'>Platelet <br /> Donation</h4>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                            <div className="bloodMethods py-3">
                                <img src={plasma} className='w-25 pt-3' alt="" />
                                <h4 className='pt-3 text-uppercase'>Plasma <br /> Donation</h4>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}








