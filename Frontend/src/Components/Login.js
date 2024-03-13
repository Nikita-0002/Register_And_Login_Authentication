import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './Login.css'
import { RiUserLine } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        let newData = { email, password }
        axios.post('/login', newData)
            .then(res => {
                console.log(res.data);
                alert("Form submitted successfully")
                navigate('/users')
                localStorage.setItem('Name', res.data.user.name)
                localStorage.setItem('Token', res.data.token)
                localStorage.setItem('Email', res.data.user.email)
                localStorage.setItem('DOB', (res.data.user.date_of_birth).slice(0, 10))
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className=' mt-4 '>

            <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>

                <div className='w-50 mx-auto border border-info border-start rounded-5 bg-dark '>
                    <button type="button" class="btn  btn-lg mt-1 " >SIGN IN</button>
                    <h1 className='text-secondary'><FaRegUserCircle /></h1>
                    <div class="col-md-12">

                        <label for="validationCustomUsername" class="form-label"></label>

                        <div class="row">
                            <div className='col md-12'>

                                <div class="input-group has-validation">
                                    <span className="input-group-text"><RiUserLine /></span>



                                    <input type="text" class="form-control icon-username" placeholder="Username" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={email} required onChange={(e) => setEmail(e.target.value)} />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12 mt-2">
                                <div class="input-group">
                                    <span className="input-group-text"><RiLockPasswordLine /></span>
                                    <input type="password" class="form-control icon-input" placeholder=" Password" id="validationCustomPassword" aria-describedby="inputGroupPrepend" value={password} required onChange={(e) => setPassword(e.target.value)} />
                                    <div class="invalid-feedback">
                                        Please choose a password.
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-12">
                        <div class="form-check mt-1 d-flex justify-content-between align-items-center">
                            <label class="form-check-label d-flex text-success" for="gridCheck">&nbsp;
                                <input class="form-check-input mr-1" type="checkbox" id="gridCheck" />
                                &nbsp;Remember Me
                            </label>
                            <label class="form-check-label text-success me-5" for="forgotPassword">
                                Forgot Password?
                            </label>
                        </div>
                    </div>
                    <div class="col-12  mt-3 mb-3 ">
                        <button class="btn   btn btn-lg" type="submit">LOGIN</button>
                    </div>
                </div>
            </form>
        </div>
    )
}