import React from 'react'
import Slider from "react-slick";
import defuit from './../../Imgs/default.jpg'

import '../Testimonials/testmonilas.css'
export default function Testimonials() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <>
  <div className='Testimonials'>
    <h2>Testimonials</h2>
<div className="layout ">
<div className='slide'>
        <Slider {...settings}>
          <div className='les'>
<div className="img-con"><img src={defuit} alt="" /></div>    
        <h3>I have been coming to this location ever since I was old enough to give blood :) I still remember my first time on October...

</h3>
<button className='btno'>READ MORE</button>
          </div>
          <div className='les'>
<div className="img-con"><img src={defuit} alt="" /></div>    

<h3>The staff is very friendly and skilled. The process is fast and easy, no pain at all :) We get a cute ribbon afterwards; makes...

</h3><button className='btno'>READ MORE</button>
          </div>
          <div className='les'>
<div className="img-con"><img src={defuit} alt="" /></div>    
<h3>Everyone there takes the time to make sure your comfortable and at ease while donating. It's a relaxed atmosphere, which makes donating a good experience....

</h3>
<button className='btno'>READ MORE</button>
          </div>
         
          
        </Slider>
      </div>
  
</div>
  </div>

  </>
}
