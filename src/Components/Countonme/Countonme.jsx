import React from 'react'
import count from './../../Imgs/count.png'


export default function Countonme() {
  return <>
    <article className="container text-muted py-5">

      <div><br /><h3 className='pt-5'>Count On Me!</h3><br />
        <p>LifeStream has a new donor recognition program! It’s called Count on Me! Our new program ensures that every donor, every day at every LifeStream donor center and mobile drive receives a special promotional item. With this new program, we will take down our online store where donors have historically been able to redeem points online for LifeStream merch and we will discontinue the points program since you, our amazing donor, will immediately receive your thank you gift with each donation. No waiting, no banking points, and no danger of points expiring. A win-win for you and the patients we serve!</p>
        <br />
        <br />
        <h3>Program Details</h3>
        <p>The fun and special item will run for a two-month period and consists primarily of T-shirts, but other types of items, such as hats, towels, and blankets, will be available at various times during the year. All promo items will be individually bagged and include a special note that describes the promo we will be offering during the next two months to encourage you to return to donate more of your precious gift!</p>
        <br />
        <p>The two-month period will ensure you have an opportunity to receive the promo item when you are eligible to donate blood.  Most importantly, you’ll be helping save lives! All promo items will be branded with the Count on Me! logo as a reminder that patients can count on YOU.</p>
        <br />
        <p>Starting in January and February, donors can receive a long-sleeved “Count on Me!” T-shirt and a “Count on Me!” hat in March and April. “Count on Me!” also includes donors’ favorite T-shirt promotions: Memorial Day, 9/11 and Veterans Day.</p>
        <br />
        <p>T-shirts will be offered in the two sizes most popular with our donors: Large and XXL. This is more cost effective for our non-profit organization, and easier for our staff to manage. And as mentioned earlier, other, non-size related items will be available at various times during the year.</p>
        <hr />
      </div>

      <div className='row container'>
        <div className="col-md-4 pb-4">
          <img src={count} className='w-100' alt="" />
        </div>
        <div className="col-md-7 ps-3 pt-4">
          <h3>Are You A Platelet Donor?</h3>
          <p>For our frequent platelet donors, we’ve prepared a special T-shirt “six-pack” and the goal is to collect all six shirts throughout the year! Platelet donors also receive the regular promo item <strong>in addition</strong> to their special T-shirt.</p>
          <p><em>Platelet six-pack shirt available once every two months. Colors subject to change.</em></p>
          <br />
          <p>Patients being treated for blood diseases, including cancer, often need frequent platelet transfusions as treatment for the disease can reduce platelet count. For more information about donating platelets.</p>
        </div>
        <hr />
      </div>


      <div className='py-3'>
        <h3><strong>Schedule Your Donation Today</strong></h3>
        <p>To make an appointment, click below, call 800.879.4484 or download the LifeStream mobile app!</p>
        <p>Don’t forget to use ExpressPass to speed up your donation process.</p>
      </div>

      <div className="text-center ">
        <a className='btn btn-danger m-1 rounded-pill p-3'>San Bernardino Donor Center</a>
        <a className='btn btn-danger m-1 rounded-pill p-3'>Riverside Donor Center</a>
        <a className='btn btn-danger m-1 rounded-pill p-3'>Rancho Mirage Donor Center</a><br />
        <div className="text-center">
          <a className='btn btn-danger m-1 rounded-pill p-3'>Placentia Donor Center</a>
          <a className='btn btn-danger m-1 rounded-pill p-3'>Murrieta Donor Center</a>
          <a className='btn btn-danger  rounded-pill p-3'>Ontario Donor Center</a><br />
        </div>
        <div className="text-center">
          <a className='btn btn-danger m-1 rounded-pill p-3'>La Quinta Donor Center</a>
          <a className='btn btn-danger m-1 rounded-pill p-3'>High Desert Donor Center</a>
        </div>
      </div>

      <div className='py-5'>
        <h3><strong>Your Well-Being Is Our #1 Priority!</strong></h3>
        <p>We require all donors and staff to wear masks/face coverings
          (please note that masks/face coverings with one-way valves to filter outside air are not sufficient) and submit to temperature checks and COVID-19 symptom checks before accessing donor waiting areas. LifeStream adheres to social distancing guidelines and has enhanced already strict cleaning and disinfecting protocols. To learn more about the steps we’re taking.</p>
      </div>
    </article>



    <footer>
    </footer></>
}
