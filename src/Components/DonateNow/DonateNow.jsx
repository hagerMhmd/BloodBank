/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function DonateNow() {
    const [values, setValues] = useState([
        {
            type: '',
            unit: '',
            disease: '',
            age: ''
        },
    ])
    function getDonateInfo(e) {
        let myValue = { ...values }
        myValue[e.target.name] = e.target.value
        setValues(myValue)
        console.log(myValue);
        console.log(values);
    }
    useEffect(() => {
        setValues()
    }, [])
    useEffect(() => {
    }, [values])

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
                                    <select onChange={getDonateInfo} className='form-select' name="bloodGroup" id="selectArea">
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
                                    <label className='fw-bold' htmlFor="unit">Unit (in ml)</label>
                                </div>
                                <div className="col-md-6">
                                    <input onChange={getDonateInfo} type="number" id='unit' name='unit' className='form-control' />
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="disease">Disease (if any)</label>
                                </div>
                                <div className="col-md-6">
                                    <input onChange={getDonateInfo} type="text" id='disease' name='disease' className='form-control' placeholder='' />
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="age">Age</label>
                                </div>
                                <div className="col-md-6">
                                    <input onChange={getDonateInfo} type="number" id='age' name='age' className='form-control' placeholder='' />
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