import React from 'react';
import { Formik } from 'formik';
import { Input, Form, Button } from 'reactstrap';
const Contact = () => {
    return (
        <div style={{ marginTop: '50px' }}>

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
                            <Form onSubmit={handleSubmit}
                                className='col-sm-6 m-auto'>
                                <h3 style={{ color: 'dodgerblue' }}>Please fillup the form to contact</h3>

                                <Input
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder='Enter you email'
                                    className='form-control'
                                />
                                <span>{errors.email}</span><br />

                                <Input
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder='Your phone number'
                                    className='form-control'
                                />
                                <span>{errors.phone}</span> <br />

                                <Input
                                    type='textarea'
                                    name='comment'
                                    placeholder='Enter Your Message! '
                                    onChange={handleChange}
                                    value={values.comment}
                                />
                                <span>{errors.comment}</span><br />

                                <Button block type='submit' className='btn btn-success m-auto' style={{ width: '100px' }}>Submit</Button>
                            </Form>

                        </div>
                    )
                }

            </Formik>

        </div>
    );
}

export default Contact;