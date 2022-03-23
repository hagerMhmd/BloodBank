import React from 'react'

export default function BloodRequest() {


    return <>
        <section className='py-5 mt-4'>
            <div className="container w-50 pb-5 mt-5">
                <div className="shadow rounded-3 pb-5">
                    <h2 className='text-center py-3 mb-4 text-white bg-dark'>MAKE DONATE REQUEST</h2>
                    <form>
                        <div className="container pt-3">
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="patientAge">Patient Age</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="number" id='patientAge' className='form-control' />
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="reason">Reason</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" id='reason' className='form-control' placeholder='' />
                                </div>
                            </div>
                            <div className="row ps-md-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="requestSelectArea">Patient Name</label>
                                </div>
                                <div className="col-md-6">
                                    <select className='form-select' name="bloodGroup" id="requestSelectArea">
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
                                    <input type="number" id='unit' className='form-control' placeholder='' />
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
    </>
}
