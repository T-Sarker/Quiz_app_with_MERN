import React, { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })

    const handelFormdata = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(formData);
    return (
        <div className='container m-auto'>

            <form className='w-50 m-auto bg-section p-4'>
                <img className="text-white mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="text-white h3 mb-3 fw-normal text-center">Please sign in</h1>

                <div className="text-white form-floating my-2">
                    <input type="email" className="text-white form-control" id="email" name='email' onChange={handelFormdata} placeholder="name@example.com" />
                    <label htmlFor="email">Email address</label>
                </div>

                <div className="text-white form-floating my-2">
                    <input type="password" className="text-white form-control" id="password" name='password' onChange={handelFormdata} placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>

                {/* <div className="text-white checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div> */}
                <button className="text-white w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="text-white mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
        </div>
    )
}

export default Login
