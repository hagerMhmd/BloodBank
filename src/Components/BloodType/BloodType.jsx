/* eslint-disable no-unused-vars */
import React from 'react'
import style from './BloodType.module.css'
import img from '../../Imgs/Target-Your-Type.png'
import tagetVideo from '../../Imgs/Target Your Type _ OneBlood.mp4'

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
    </>
}


// 2682095355411600





