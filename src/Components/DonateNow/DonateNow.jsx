/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function DonateNow() {



    return <>
        <section className='py-5 mt-4'>
            <div className="container w-50 pb-5 mt-5">
                <div className="shadow rounded-3 pb-5">
                    <h2 className='text-center py-3 mb-4 text-white bg-dark'>DONATE BLOOD</h2>
                    <form>
                        <div className="container pt-3">
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="selectArea">Blood Group</label>
                                </div>
                                <div className="col-md-6">
                                    <select className='form-select w-75' name="bloodGroup" id="selectArea">
                                        <option value="O-">O-</option>
                                        <option value="O+">O+</option>
                                        <option value="A-">A-</option>
                                        <option value="A+">A+</option>
                                        <option value="B-">B-</option>
                                        <option value="B+">B+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="AB+">AB+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="">Unit (in ml)</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="number" className='form-control' />
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="">Disease (if any)</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className='form-control' placeholder='' />
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="">Age</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="number" className='form-control' placeholder='' />
                                </div>
                            </div>
                            <div className="row ps-md-5">
                                <div className="col-md-3">
                                    <button className='btn btn-danger'>Donate</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}



// const [locationSatate, setLocationSatate] = useState(null)
// function successCallback(loc) {
//     console.log(loc);
//     setLocationSatate('successfully get locaiton')
// }
// function errorCallback(err) {
//     console.log(err);
//     setLocationSatate('error')
// }
// function getLocation() {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
// }

// {/* <h2 className='h2Color text-center pt-5'>Find A Blood Drive or Donor Center</h2>
// <h5 className='h2Color text-center '>Be a part of the 10% that donate blood</h5>
// <button onClick={getLocation} className='btn btn-outline-primary'>Find You Location</button>
// <span className='text-danger alert'>{locationSatate}</span> */}