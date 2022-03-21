/* eslint-disable no-unused-vars */
import React from 'react'
import style from './BloodInfo.module.css'
import img from '../../Imgs/download (1).jpg'
import img2 from '../../Imgs/howbloodisneeded.png'
import img3 from '../../Imgs/download (1).png'
import img4 from '../../Imgs/Heart-Article-Hero-1200x500.gif'


export default function BloodInfo() {
    return <>
        <section className='py-5 px-3'>
            <div className="container py-5 mt-5">
                <div className={`${style.bg} row ps-4 shadow my-5 rounded-3 py-5 align-items-center`}>
                    <div className="col-md-5 py-5">
                        <div className="bloodInfo-items">
                            <h1 className={style.h1Font}>What is <br /> Blood?</h1>
                            <h5 className={style.fontColor}>Blood is made up of four main components. <br /> Red blood cells, platelets, plasma and <br /> white blood cells. Each whole blood <br /> donation has the potential to save up <br /> to three lives.</h5>
                        </div>
                    </div>
                    <div className="col-md-5 offset-0 offset-md-1">
                        <div className="BloodInfo-Img">
                            <img src={img3} className='w-100 rounded' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={`${style.sectionBg} py-5 px-3`}>
            <div className={`${style.sectionBg} container`}>
                <div className="row align-items-center">
                    <div className="col-md-5 order-1 order-md-0  py-5">
                        <div className="item">
                            <img src={img2} className='w-100 rounded-3 ' alt="" />
                            {/* <img src={img}  className='w-100' alt="" /> */}
                        </div>
                    </div>
                    <div className="col-md-5 offset-0 offset-md-1">
                        <div className="bloodInfo-items">
                            <h1 className={style.h1Font}>How Blood is <br /> Needed</h1>
                            <h5 className={style.fontColor}>Blood is made up of four main components. Red blood  cells, platelets, plasma and white blood cells. Each whole blood donation has the potential to save up to three lives.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section >
            <div className="container py-5 mt-5">
                <div className={`row ps-4 shadow my-5 rounded-3 py-5 align-items-center`}>
                    <div className="col-md-5 py-5">
                        <div className="bloodInfo-items">
                            <h1 className={style.h1Font}>Journey of<br /> Blood</h1>
                            <h5 className={style.fontColor}>Learn about the blood donation process and the journey your donated blood travels from collection to distribution, including how potential donors are screened and how the blood is processed, tested and stored.</h5>
                        </div>
                    </div>
                    <div className="col-md-5 offset-0 offset-md-1">
                        <div className="BloodInfo-Img">
                            <img src={img} className='w-100 rounded-3' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={`${style.sectionBg} py-5 px-3`}>
            <div className={`${style.sectionBg} container`}>
                <div className="row align-items-center">
                    <div className="col-md-5 order-1 order-md-0  py-5">
                        <div className="item">
                            <img src={img4} className='w-100 rounded-3 ' alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 offset-0 offset-md-1">
                        <div className="bloodInfo-items">
                            <h1 className={style.h1Font}>How Blood is <br /> Needed</h1>
                            <h5 className={style.fontColor}>Blood is made up of four main components. Red blood  cells, platelets, plasma and white blood cells. Each whole blood donation has the potential to save up to three lives.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}