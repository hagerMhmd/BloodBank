import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from './Home.module.css'
import { Link } from 'react-router-dom';
import DonateBox from '../DonateBox/DonateBox';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials'
import LastesNews from '../LastesNews/LastesNews'
import Details from '../Details/Details';
import SuportUs from '../SupportUs/SupportUs';


export default function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // centerMode: true,  
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <>
    <div className='overflow-hidden'>
      <Slider {...settings} >
        <div className={`${style.bg2} px-lg-5 d-flex align-items-center px-4`}>
          <div className={`text-white `} >
            <h3 className="py-2">You could win a VIP</h3>
            <h1 className={`${style.font} py-2`}>Coachella Experience!</h1>
            <h5 className='py-2'>Give Blood March 13-April for a chance to win</h5>
            <br />
            <Link className='btn text-dark btn-light my-3 rounded-pill px-4 py-2' to='/about'>Learn More</Link>
          </div>
        </div>
        <div className={`${style.bg} py-5 px-lg-5 d-flex align-items-center px-4`}>
          <div className={`text-white `} >
            <h3 className="py-2">Critical Blood Shortage</h3>
            <h1 className={`${style.font} py-2`}>You Are Needed!</h1>
            <h5 className='py-2'>Blood donations are needed now to avert the need to postpone potential <br />  lifesaving treatments at local hospitals.</h5>
            <br />
            <Link className='btn text-dark btn-light my-3 rounded-pill px-4 py-2' to='/about'>Learn More</Link>
          </div>
        </div>
      </Slider>
    </div>
    <DonateBox />
    <About />
    <Details/>
    <SuportUs/>
    <LastesNews />
    <Testimonials />
  </>
}