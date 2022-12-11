import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {

    const [formData, setFormData] = useState({ email: '', name: '', phone: '', password: '' })
    const [result, setResult] = useState({})

    const handelFormdata = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const subitData = async (e) => {
        e.preventDefault();
        const registerUser = await axios.post('/auth/register', { data: formData })
        setResult(registerUser.data)
    }

    return (

        <div className='container m-auto my-3'>

            <form className='w-50 m-auto bg-section p-5'>
                <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal text-center text-white fw-bolder">SIGN UP</h1>
                <h4 className={result.status == true ? 'text-success' : 'text-danger'}>{result.msg}</h4>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" name='email' onChange={handelFormdata} placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" name='name' onChange={handelFormdata} placeholder="name@example.com" />
                    <label htmlFor="floatingInput">User Name</label>
                </div>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" name='phone' onChange={handelFormdata} placeholder="name@example.com" />
                    <label htmlFor="floatingInput">phone</label>
                </div>

                <div className="form-floating my-2">
                    <input type="password" className="form-control" id="floatingPassword" name='password' onChange={handelFormdata} placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={subitData}>Sign in</button>

            </form>
        </div>
    )
}

export default Register