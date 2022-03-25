/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { values } from '../DonateNow/DonateNow'

export default function Donors() {

    console.log(values);
    const [donorDetails, setDonorDetails] = useState([
        {
            bloodGroup: 'A+',
            unit: `${500} Ml`,
            disease: 'no thing',
            age: '23',
            weigh: `${60} Kg`
        },
        {
            bloodGroup: 'A+',
            unit: `${500} Ml`,
            disease: 'no thing',
            age: '23',
            weigh: `${60} Kg`
        },
        {
            bloodGroup: 'A+',
            unit: `${500} Ml`,
            disease: 'no thing',
            age: '23',
            weigh: `${60} Kg`
        },
    ])

    return <>
        <section className='pt-5'>
            <div className="container pt-5">
                <div className="mt-5 shadow pt-3">
                    <div className="row mt-3 py-2 align-items-center">
                        <div className="col-md-2 offset-md-1 px-1">
                            <h5>Blood Group</h5>
                        </div>
                        <div className="col-md-2 px-0">
                            <h5>Unit (in ml)</h5>
                        </div>
                        <div className="col-md-2 px-0">
                            <h5>Disease (if any)</h5>
                        </div>
                        <div className="col-md-1 px-0">
                            <h5>Age</h5>
                        </div>
                        <div className="col-md-1 px-0">
                            <h5>Weigh</h5>
                        </div>
                        <div className="col-md-1 px-0">
                            <h5>Accept</h5>
                        </div>
                        <div className="col-md-1 px-0">
                            <h5>Ignore</h5>
                        </div>
                    </div>
                    <div className="row py-2 align-items-center">
                        {donorDetails.map((donor, index) => <>
                            <div key={index} className='d-flex  py-2 align-items-center' >
                                <div className="col-md-2 border-top offset-md-1">
                                    <h5 className='pt-3'>{donor.bloodGroup}</h5>
                                </div>
                                <div className="col-md-2 border-top">
                                    <h5 className='pt-3'>{donor.unit}</h5>
                                </div>
                                <div className="col-md-2 border-top">
                                    <h5 className='pt-3'>{donor.disease}</h5>
                                </div>
                                <div className="col-md-1 border-top">
                                    <h5 className='pt-3'>{donor.age}</h5>
                                </div>
                                <div className="col-md-1 border-top">
                                    <h5 className='pt-3'>{donor.weigh}</h5>
                                </div>
                                <div className="col-md-1 border-top">
                                    <button className='btn btn-outline-danger py-1 mt-3'>Accept</button>
                                </div>
                                <div className="col-md-2 border-top">
                                    <button className='btn btn-outline-danger py-1 mt-3'>ignore</button>
                                </div>
                            </div>
                        </>)}
                    </div>
                </div>
            </div>
        </section>
    </>
}
