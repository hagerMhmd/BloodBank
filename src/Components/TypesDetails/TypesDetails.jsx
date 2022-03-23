/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Onegative({ title, type, info, info2, liTitle, li0, li1, li2, li3, tableTitle, td0right, td0left, td1right, td1left, td2right, td2left, td3right, td3left , td4right , td4left}) {
    return <>
        <section id='typeOpositive' className='py-5'>
            <div className="container py-5">
                <h1 className='text-center pt-5'>{title}</h1>
                <div className="row pt-4">
                    <div className="col-md-1">
                        <h2 className='p-2 bg-danger text-white text-center'>{type}</h2>
                    </div>
                    <div className="col-md-10">
                        <p>{info} </p>
                        <p>{info2}</p>
                    </div>
                    <div className="col-md-10">
                        <h3 className='h2Color py-3'>{liTitle}</h3>
                        <ul>
                            <li>{li0}</li>
                            <li>{li1}</li>
                            <li>{li2}</li>
                            <li>{li3}</li>
                        </ul>
                        <h3 className='h2Color py-3'>{tableTitle}</h3>
                        <table class="table table-striped table-hover">
                            <tbody>
                                <tr>
                                    <td>{td0right}</td>
                                    <td></td>
                                    <td>{td0left}</td>
                                </tr>
                                <tr>
                                    <td>{td1right}</td>
                                    <td></td>
                                    <td>{td1left}</td>
                                </tr>
                                <tr>
                                    <td>{td2right}</td>
                                    <td></td>
                                    <td>{td2left}</td>
                                </tr>
                                <tr>
                                    <td>{td3right}</td>
                                    <td></td>
                                    <td>{td3left}</td>
                                </tr>
                                <tr>
                                    <td>{td4right}</td>
                                    <td></td>
                                    <td>{td4left}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
}
