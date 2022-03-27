import React from 'react'
import defuit from './../../Imgs/default.jpg'
import blakh from './../../Imgs/black-history-month-blog-banner-6-1536x390.png'

import '../LastesNews/latest new.css'
export default function LastesNews() {
  return <>
  <div className="container p-4">
    <h2 className='title-news'>Latest News</h2>
    <div className="row">
      <div className="col-md-8">
        <div className="row">
        <div className="col-md-5 p-0">
          <img src={defuit} alt="" className='w-100 im'/>
        </div>
        <div className="col-md-7 late-rights">
         <h3>Lifestream’s Super Bowl Lvi Experience Winners

</h3>
<h5>February 21, 2022
</h5>
<p>LifeStream's Super Bowl LVI Experience winners witnessed the Los Angeles Rams become champions in their...

</p>
<h6 className='nes'>Read More</h6>
        </div>
        </div>
        <div className="row">
        
        <div className="col-md-7 late-rights-btom">
         <h3>Celebrating African American Medical Pioneers

</h3>
<h5>February 7, 2022

</h5>
<p>Celebrating African American Medical Pioneers Modern healthcare would not be where it is today without


</p>
<h6 className='nes'>Read More</h6>
        </div>
        <div className="col-md-5 p-0">
          <img src={blakh} alt="" className='w-100 im'/>
        </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row p-1 hamo my-2">
          <div className="col-md-4 ms-3">
            <div className="item lo">
            <img src={defuit} alt="" className='w-100 no '/>

            </div>

          </div>
          <div className="col-md-7 so">
            <h4>Lifestream’s Super Bowl Lvi Experience Winners
</h4>
<p>LifeStream's Super Bowl LVI Experience winners witnessed the Los Angeles Rams become champions in their

</p>
<h6>February 21, 2022
</h6>
          </div>

        </div>
        <div className="row p-1 hamo my-2">
          <div className="col-md-4 ms-3">
            <div className="item lo">
            <img src={blakh} alt="" className='w-100 no '/>

            </div>

          </div>
          <div className="col-md-7 so">
            <h4>Celebrating African American Medical Pioneers

</h4>
<p>Celebrating African American Medical Pioneers Modern healthcare would not be where it is today without


</p>
<h6>February 7, 2022

</h6>
          </div>

        </div>
        <div className="row p-1 hamo my-2">
          <div className="col-md-4 ms-3">
            <div className="item lo">
            <img src={defuit} alt="" className='w-100 no '/>

            </div>


          </div>
          <div className="col-md-7 so">
            <h4> JOIN THE PLATELET GOLD CLUB!

</h4>
<p>Platelet Donors Assemble! We’re launching an all-new platelet program to thank you for your frequent


</p>
<h6>January 24, 2022

</h6>
          </div>

        </div>
        <h4 className='lila ms-5'>View All</h4>
      </div>
    </div>
  </div>
  </>
}
