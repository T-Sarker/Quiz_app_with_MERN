import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth()
    const [formData, setFormData] = useState({ email: '', password: '' })

    const handelFormdata = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const subitData = async (e) => {
        e.preventDefault();
        const loginUser = await axios.post('/auth/login', { data: formData })
        if (loginUser.data.status === true) {
            console.log(loginUser.data.user);
            setAuth(loginUser.data.user)
            navigate('/')
        }
    }
    return (
        <div className='container m-auto'>

            <form className='w-50 m-auto bg-section p-4'>
                <img className="text-white mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="text-white h3 mb-3 fw-normal text-center">Please sign in</h1>

                <div className="text-white form-floating my-2">
                    <input type="email" className="form-control" id="email" name='email' onChange={handelFormdata} placeholder="name@example.com" />
                    <label htmlFor="email">Email address</label>
                </div>

                <div className="text-white form-floating my-2">
                    <input type="password" className="form-control" id="password" name='password' onChange={handelFormdata} placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="text-white w-100 btn btn-lg btn-primary" type="submit" onClick={subitData}>Sign in</button>
            </form>
        </div>
    )
}

export default Login
