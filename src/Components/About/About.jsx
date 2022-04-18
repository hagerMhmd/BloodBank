import React from 'react'
import style from './About.module.css'
import people from './../../Imgs/people.png'
import { Link } from 'react-router-dom';

export default function About() {
  return <>
  <div className={`${style.about}`}>
  <div className="container ">
    <div className="row py-5">
      <div className="col-md-6 py-5">
        <div className="item1 pt-3">
        <h2 className={`${style.h2_item} mb-4`}>Who Are You</h2>
        <p className={`${style.p}`}>LifeStream has served the Inland Empire and surrounding areas since 1951 providing
        lifesaving blood products and services to more than 80 Southern California hospitals
        and medical facilities. As a non-profit organization, LifeStream relies upon the
        generosity of more than 500 blood donations daily.</p>
        <button className={`${style.bttn}`}>Read More</button>
        </div>
        <div className="item2 pt-5">
        <h2 className={`${style.h2_item} mb-4`}>Schedule Your Appointment</h2>
        <p>Giving the gift of life through blood donation is easy!</p>
        <Link to='/donatenow'>
        <button className={`${style.bttn}`}>Donate Blood</button>
        </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={people} className='w-100' alt=""/>
      </div>
    </div>
  </div>
  </div>
  </>
}
