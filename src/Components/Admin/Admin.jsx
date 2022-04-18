import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {

    const navigate = useNavigate()
    const [inputsReq, setInputsReq] = useState('')
    let values = []

    function checkUser(e) {
        let userData = { ...values }
        userData[e.target.name] = e.target.value
        values = userData
        console.log(values);
    }
    function isEmpty() {
        if (values.name === undefined || values.password === undefined) {
            setInputsReq(<span className="mb-2 d-block text-danger">All inputs required</span>)
        } else {
            setInputsReq('')
            return true
        }
    }
    function checkUserData() {
        if (values.name === 'life Stream' || values.password === 'lieStream2021') {
            console.log('done');
            return true
        } else {
            setInputsReq(<span className="mb-2 d-block text-danger">Invalid name or password</span>)
        }
    }
    function submit(e) {
        e.preventDefault()
        if (isEmpty() !== true) {
            console.log('empty');
            return
        }
        if(checkUserData() !== true){
            return
        }
        navigate('/donors')
    }
    return <>
        <section className='donateBox py-5 mt-4' >
            <div className="container w-50 pb-5 mt-5">
                <div className="shadow rounded-3 pb-5">
                    <h2 className='text-center py-3 mb-4 text-white bg-dark'>Admin Login</h2>
                    <form onSubmit={submit} >
                        <div className="container pt-3">
                            <div className="row gx-0 ps-lg-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="name">User Name</label>
                                </div>
                                <div className="col-md-8">
                                    <input onChange={checkUser} type="text" id='name' name='name' className='form-control' placeholder='' />
                                </div>
                            </div>
                            <div className="row gx-0 ps-lg-5 my-3 align-items-center">
                                <div className="col-md-3">
                                    <label className='fw-bold' htmlFor="password">Password</label>
                                </div>
                                <div className="col-md-8">
                                    <input onChange={checkUser} type="password" id='password' name='password' className='form-control' />
                                </div>
                            </div>
                            <div className="row gx-0 ps-lg-5">
                                <div className="col-md-3">
                                    <button className='btn btn-danger'>Login</button>
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
