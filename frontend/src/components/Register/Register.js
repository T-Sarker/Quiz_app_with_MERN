import React, { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({ email: '', name: '', phone: '', password: '' })

    const handelFormdata = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(formData);

    return (

        <div className='container m-auto'>

            <form className='w-50 m-auto bg-section p-4'>
                <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" name='email' onChange={handelFormdata} placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" name='User Name' onChange={handelFormdata} placeholder="name@example.com" />
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

                {/* <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div> */}
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
        </div>
    )
}

export default Register