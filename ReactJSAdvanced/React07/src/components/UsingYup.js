import React from 'react';
import { useFormik } from 'formik';
import validations from './Validations';


function UsingYup() {

    // const formik = useFormik({
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repassword: ""
        },

        onSubmit: values => {
            console.log(values);
        },
        validationSchema: validations
    })

    return (
        <div>
            <div className="row mb-3">
                <div className="col">
                    <h1>Using Yup</h1>
                    <hr />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 offset-4">
                    {/* <form onSubmit={formik.handleSubmit}> */}
                    <form onSubmit={handleSubmit}>
                        <div className='mb-2'>
                            <label htmlFor='firstName' className='form-label'>First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="John" className="form-control"
                                value={values.firstName} onChange={handleChange} />
                            <div className='small text-danger'>{errors.firstName}</div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='lastName' className='form-label'>Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Doe" className="form-control"
                                value={values.lastName} onChange={handleChange} />
                            <div className='small text-danger'>{errors.lastName}</div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input type="text" id="email" name="email" type="email" placeholder="john@doe.com" className="form-control"
                                value={values.email} onChange={handleChange} />
                            <div className='small text-danger'>{errors.email}</div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input id="password" name="password" type="password" placeholder="*******" className="form-control"
                                value={values.password} onChange={handleChange} />
                            <div className='small text-danger'>{errors.password}</div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='repassword' className='form-label'>Re-Password</label>
                            <input id="repassword" name="repassword" type="password" placeholder="*******" className="form-control"
                                value={values.repassword} onChange={handleChange} />
                            <div className='small text-danger'>{errors.repassword}</div>
                        </div>

                        <div className='mb-2 pt-2 text-center'>
                            <button className='btn btn-primary' type='submit'>Send Form</button>
                        </div>

                    </form>

                </div>
            </div>
        </div >
    );
}

export default UsingYup;