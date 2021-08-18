import React from 'react';
import { Formik } from 'formik';

const Contact = () => {
    return (
        <div>

            <Formik
                initialValues={{
                    email: '',
                    phone: '',
                    comment: '',
                }}
                onSubmit={
                    (values) => console.log(values)
                }
                validate={
                    (values) => {
                        let errors = {};
                        if (values.email === '') errors.email = '*Required';
                        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid Email'
                        if (values.phone === '') errors.phone = '*Required';
                        if (values.comment === '') errors.comment = '*Required';
                        return errors;
                    }
                }
            >{
                    ({ values, handleChange, handleSubmit, errors }) => (
                        <div>
                            <form onSubmit={handleSubmit}
                                className='col-md-8 m-auto'>
                                <h3>Please put your comment here</h3>

                                <input
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder='Enter you email'
                                    className='form-control'
                                />
                                <span>{errors.email}</span><br />

                                <input
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder='Your phone number'
                                    className='form-control'
                                />
                                <span>{errors.phone}</span> <br />

                                <textarea
                                    rows='7'
                                    cols='122'
                                    name='comment'
                                    placeholder='write your comment here! '
                                    onChange={handleChange}
                                    value={values.comment}
                                />
                                <span className='d-block'>{errors.comment}</span><br />

                                <button type='submit' className='btn btn-success m-auto' style={{ width: '100px' }}>Submit</button>
                            </form>

                        </div>
                    )
                }

            </Formik>

        </div>
    );
}

export default Contact;