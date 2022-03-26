/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export let values = []

export default function DonateNow() {
    const navigate = useNavigate()
    // ---------------------------------------------------- All Error Messages Variables

    const [invalidAge, setInvalidAge] = useState('')
    const [invalidweigh, setInvalidweigh] = useState('')
    const [inputsReq, setInputsReq] = useState('')
    // const [values, setValues] = useState([])

    // ---------------------------------------------------- On Change
    function getDonateInfo(e) {
        let myValue = {...values}
        myValue[e.target.name] = e.target.value
        values = myValue
        // setValues(myValue)
        // let myValue = [e.target.name]
        // myValue = e.target.value
        // values = myValue
        console.log(values);
    }
    // -------------------------------------------------- Check Values 
    function isEmpty() {
        if (values.bloodGroup === undefined || values.unit === undefined || values.age === undefined || values.weigh === undefined) {
            setInputsReq(<span className="mb-2 d-block text-danger">All inputs required</span>)
        } else {
            setInputsReq('')
            return true
        }
    }
    //--------------------------------------------------- Validate Age
    function validateAge() {
        if (+values.age < 18 || +values.age > 75) {
            setInvalidAge(<span className="mb-2 d-block text-danger">Age Must be between 18 and 75 years</span>)
            return
        } else {
            setInvalidAge('')
            return true
        }
    }
    // ---------------------------------------------- Validate Weigh
    function validateWeigh() {
        if (+values.weigh < 50) {
            setInvalidweigh(<span className="mb-2 d-block text-danger">Weigh Must be greater or equal 50kg.</span>)
            return
        } else {
            setInvalidweigh('')
            return true
        }
    }
    //------------------------------------------------- On Submit
    function submit(e) {
        e.preventDefault()
        if (validateAge() !== true) {
            return
        }
        if (validateWeigh() !== true) {
            return
        }
        if (isEmpty() !== true) {
            return
        }
        navigate('/donors')
        // localStorage.setItem('donors', JSON.stringify(values))
    }
    return <>
        <section className='donateBox py-5 mt-4' >
            <div className="container w-50 pb-5 mt-5">
                <div className="shadow rounded-3 pb-5">
                    <h2 className='text-center py-3 mb-4 text-white bg-dark'>DONATE BLOOD</h2>
                    <form onSubmit={submit} >
                        <div className="container pt-3">
                            <div className="row gx-0 ps-lg-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="selectArea">Blood Group</label>
                                </div>
                                <div className="col-md-8">
                                    <select onChange={getDonateInfo} className='form-select' name="bloodGroup" id="selectArea">
                                        <option disabled >Choose your blood type</option>
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
                            <div className="row gx-0 ps-lg-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="unit">Unit (in ml)</label>
                                </div>
                                <div className="col-md-8">
                                    <input onChange={getDonateInfo} type="number" id='unit' name='unit' className='form-control' />
                                </div>
                            </div>
                            <div className="row gx-0 ps-lg-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="disease">Disease (if any)</label>
                                </div>
                                <div className="col-md-8">
                                    <input onChange={getDonateInfo} type="text" id='disease' name='disease' className='form-control' placeholder='' />
                                </div>
                            </div>
                            <div className="row gx-0 ps-lg-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="age">Age</label>
                                </div>
                                <div className="col-md-8">
                                    <input onChange={getDonateInfo} type="number" id='age' name='age' className='form-control' placeholder='' />
                                </div>
                                <div className="col-md-6 offset-md-3">
                                    <div className="pt-3">{invalidAge}</div>
                                </div>
                            </div>
                            <div className="row gx-0 ps-lg-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="Weigh">Weigh </label>
                                </div>
                                <div className="col-md-8">
                                    <input onChange={getDonateInfo} type="number" id='weigh' name='weigh' className='form-control' placeholder='' />
                                </div>
                                <div className="col-md-6 offset-md-3">
                                    <div className="pt-3">{invalidweigh}</div>
                                </div>
                            </div>
                            <div className="row gx-0 ps-lg-5">
                                <div className="col-md-3">
                                    <button className='btn btn-danger'>Donate</button>
                                </div>
                                <div className="col-md-6 ">
                                    <div >{inputsReq}</div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}