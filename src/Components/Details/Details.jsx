import React from 'react'
import { Link } from 'react-router-dom'
import style from './Details.module.css'

export default function Details() {
  return <>
  <div className="container">
          <div className="row py-5">      
              <div className={`${style.con} col-md-6`}>
                  <div className={`${style.all}`}>
                  <div className={`${style.img1} `}>
                      <div className={`${style.overlay}`}>
                          <div className={`${style.inner}`}>
                              <h3 className='pt-5 fs-2'>Count On Me! <br/> Program</h3>
                              <Link className={`btn text-white border border-2 border-light rounded-pill`} aria-current="page" to='/Countonme'>READ MORE</Link>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className={`${style.all}`}>
                  <div className={`${style.img2}`}>
                       <div className={`${style.overlay}`}>
                          <div className={`${style.inner}`}>
                             <h3 className='pt-5 fs-2'>Volunteer</h3>
                             <button className='btn text-white border border-2 border-light rounded-pill'>READ MORE</button>
                           </div>
                        </div>
                  </div>
                  </div>
              </div>
              <div className= 'col-md-6'>
               <div className={`${style.all}`}>
                  <div className={`${style.imgwrap}`}>
                     <div className={`${style.overlay}`}>
                       <div className={`${style.inner}`}>
                         <h3 className='pt-5 fs-2'>Lives Saved </h3>
                         <Link className='btn text-white border border-2 border-light rounded-pill' aria-current="page" to='/home' >READ MORE</Link>
                       </div>
                     </div>
                  </div>
               </div>
              </div>
              
          </div>
      </div>
  </>
    
  
}
