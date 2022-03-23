/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Onegative({ typeStyle , type, info, info2,  Percentage,  BloodTypes, RedCells, Platelets ,  Plasma}) {
    return <>
        <section id='typeOpositive' className='pt-5'>
            <div className="container pt-5 pb-3">
                <h1 className='text-center pt-5'>How To Target Type® {type}</h1>
                <div className="row pt-4">
                    <div className="col-md-1">
                        <h2 className={`${typeStyle} p-2 text-white text-center`}>{type}</h2>
                    </div>
                    <div className="col-md-10">
                        <p>{info} </p>
                        <p>{info2}</p>
                    </div>
                    <div className="col-md-10">
                        <h3 className='h2Color pt-3'>The Power of {type}</h3>
                        <table class="table table-striped table-hover">
                            <tbody>
                                <tr>
                                    <td>Percentage of Population:</td>
                                    <td></td>
                                    <td>{Percentage}</td>
                                </tr>
                                <tr>
                                    <td>Blood Types you Can Receive:</td>
                                    <td></td>
                                    <td>{BloodTypes}</td>
                                </tr>
                                <tr>
                                    <td>Patients Who Can Receive Your Red Cells:</td>
                                    <td></td>
                                    <td>{RedCells}</td>
                                </tr>
                                <tr>
                                    <td>Patients Who Can Receive Your Platelets:</td>
                                    <td></td>
                                    <td>{Platelets}</td>
                                </tr>
                                <tr>
                                    <td>Patients Who Can Receive Your Plasma:</td>
                                    <td></td>
                                    <td>{Plasma}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
}
// td1right='Blood Types you Can Receive:'
// td1left='A-, O-'
// td2right='Patients Who Can Receive Your Red Cells:'
// td2left='Anyone'
// td3right='Patients Who Can Receive Your Platelets:'
// td3left='O-, O+'
// td4right='Patients Who Can Receive Your Plasma:'
// td4left='O-, O+'