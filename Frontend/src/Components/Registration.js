import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Registration() {

    const [name, setName] = useState("")
    const [date_of_birth, setDateOfBirth] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        let newData = { name, date_of_birth, email, password }
        axios.post('/register', newData)
            .then(res => {
                console.log(res.data);
                navigate('/login')
                alert("Form submitted successfully")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className=' mt-4  '>
            <form class="row g-3 needs-validation  " novalidate onSubmit={handleSubmit}>
                <div className='w-50 mx-auto border border-info border-start rounded-5 bg-dark text-light'>
                <div class="col-md-12 mt-3">
                    <label for="validationCustom01" class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Name"id="validationCustom01" value={name} required
                        onChange={(e) => setName(e.target.value)} />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-12 mt-1">
                    <label for="validationCustomUsername" class="form-label">Email</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Email"aria-describedby="inputGroupPrepend" value={email} required
                            onChange={(e) => setEmail(e.target.value)} />
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom05" class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Password" id="validationCustom05" value={password} required
                        onChange={(e) => setPassword(e.target.value)} />
                    <div class="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom03" class="form-label">DOB</label>
                    <input type="date" class="form-control" id="validationCustom04" value={date_of_birth} required
                        onChange={(e) => setDateOfBirth(e.target.value)} />
                    <div class="invalid-feedback">
                        Please provide a valid DOB.
                    </div>
                </div>
                <div class="col-12 mt-3 mb-3">
                    <button class="btn btn-lg " type="submit">Sign Up</button>
                </div>
                </div>
            </form>
        </div>
    )
}