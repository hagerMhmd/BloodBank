/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react'

export default function DonateNow() {
    const [locationSatate, setLocationSatate] = useState(null)

    function successCallback(loc) {
        console.log(loc);
        setLocationSatate('succefuly locaiton')
    }
    function errorCallback(err) {
        console.log(err);
        setLocationSatate('error locaiton')
    }
    function getLocation() {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }



    return <>
        <section className='py-5'>
            <div className="container py-5">
                <h2 className='h2Color text-center pt-5'>Find A Blood Drive or Donor Center</h2>
                <h5 className='h2Color text-center '>Be a part of the 10% that donate blood</h5>
                <button onClick={getLocation} className='btn btn-outline-primary'>Find You Location</button>
                <span className='text-danger alert'>{locationSatate}</span>

            </div>
        </section>

    </>
}
