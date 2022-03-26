import React from 'react'
import { Link } from 'react-router-dom'
import style from "./supportbox.module.css";



export default function Supportbox() {
  return <div className='pt-5'>
    <div className="container pt-5">
      
      <div className="row">
    <div className="col-9">
      <Link className={`${style.linkdecoration} mx-1`}  to="/home">Home</Link>
      <i class="fa-duotone fa-angles-right"></i>
      <span className={`${style.color} mx-1`} >WAYS TO SUPPORT US</span>
      <div className="">
        <h1>Ways To Support Us</h1>
        <p>Most people naturally think about donating blood when they decide to support their local blood bank. We like the way they think because we need at least 500 donations of blood each day just to meet the basic needs of our neighbors in local hospitals and medical centers.</p>
        <p className="pb-3">We also realize that not everyone is able to make regular blood donations and some, for various reasons, aren’t able to donate blood at all. For these reasons, we are happy to offer everyone alternative ways to support our mission of helping save lives by connecting donors and patients through the gift of blood.</p>
        <h1>Financial Support</h1>
        <p>In addition to blood donations, we also welcome financial support from donors, businesses, and foundations to help offset the costs of operating seven (7) blood donation centers, conducting 1,700 mobile blood drives each year, and everything that goes into testing, processing and storing blood to ensure our community has a safe, adequate supply of blood at all times. We also strive to purchase new eco-friendly, state-of-the-art mobile coaches to replace our aging, environmentally-deficient mobile fleet. Grant money we received from the San Manuel Band of Mission Indians and OneLegacy helped us purchase our first new mobile coach shown in the pictures below.</p>
      </div>
    </div>
    <div className="col-3" ></div>
  </div>

</div>
</div>
}
