import React, { useEffect, useState } from 'react'

export default function BloodRequest() {
    const [values, setValues] = useState([])

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
    function submitRequest(e) {
        e.preventDefault()
        document.querySelector('#requestForm').classList.add('d-none')
        document.querySelector('#response').classList.replace('d-none', 'd-block')
    }
    return <>
        <section id='requestForm' className='donateBox py-5 mt-4'>
            <div className="container w-50 pb-5 mt-5">
                <div className="shadow rounded-3 pb-5">
                    <h2 className='text-center py-3 mb-4 text-white bg-dark'>MAKE DONATE REQUEST</h2>
                    <form onSubmit={submitRequest}>
                        <div className="container pt-3">
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="patientAge">Patient Age</label>
                                </div>
                                <div className="col-md-6">
                                    <input onChange={getDonateInfo} type="number" id='patientAge' name='patientAge' className='form-control' />
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="reason">Reason</label>
                                </div>
                                <div className="col-md-6">
                                    <input onChange={getDonateInfo} type="text" id='reason' name='reason' className='form-control' placeholder='' />
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="requestSelectArea">Patient Name</label>
                                </div>
                                <div className="col-md-6">
                                    <select onChange={getDonateInfo} className='form-select' name="bloodGroup" id="requestSelectArea">
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
                                    <input onChange={getDonateInfo} type="number" name='unit' id='unit' className='form-control' placeholder='' />
                                </div>
                            </div>
                            <div className="row ps-md-5">
                                <div className="col-md-3">
                                    <button className='btn btn-danger'>REQUEST</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section id='response' className='donateBox d-none py-5 mt-5'>
            <div className="container d-flex align-items-center w-50 pb-5 mt-5">
                <div className="shadow rounded-3 mt-5">
                    <h6 className='p-5 text-success'>Your request has been recived successfully and will be replied within 24 hours</h6>
                </div>
            </div>
        </section>
    </>
}