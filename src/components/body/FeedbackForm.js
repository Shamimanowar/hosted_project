import React from 'react';
import { Formik } from 'formik';
import { Input, Form, Button, Card } from 'reactstrap';
import { connect } from 'react-redux';

import { addComment } from '../../redux/actionCreators';

const mapDispatchToProps = dispatch => {
    return {
        addComment: (comment) => dispatch(addComment(comment))
    }
}
const FeedbackForm = props => {
    return (
        <div>
            <Card body>
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        comment: '',
                    }}
                    onSubmit={
                        (values) => {
                            props.addComment({
                                author: values.name,
                                phone: values.phone,
                                comment: values.comment,
                                category: props.category,
                                rootId: props.rootId
                            })

                        }
                    }
                    validate={
                        (values) => {
                            let errors = {};
                            if (values.name === '') errors.name = '*Required';
                            if (values.phone === '') errors.phone = '*Required';
                            if (values.comment === '') errors.comment = '*Required';
                            return errors;
                        }
                    }
                >{
                        ({ values, handleChange, handleSubmit, errors }) => (
                            <div>
                                <Form onSubmit={handleSubmit}
                                >
                                    <h3 style={{ color: '#002', fontFamily: 'sans-serif' }}>Put your comment here</h3>

                                    <Input
                                        name='name'
                                        value={values.name}
                                        onChange={handleChange}
                                        placeholder='Enter your name'
                                        className='form-control'
                                    />
                                    <span style={{ color: 'red' }}>{errors.name}</span><br />

                                    <Input
                                        name='phone'
                                        value={values.phone}
                                        onChange={handleChange}
                                        placeholder='Your phone number'
                                        className='form-control'
                                    />
                                    <span style={{ color: 'red' }}>{errors.phone}</span> <br />

                                    <Input
                                        type='textarea'
                                        name='comment'
                                        placeholder='write your comment here! '
                                        onChange={handleChange}
                                        value={values.comment}
                                    />
                                    <span style={{ color: 'red' }}>{errors.comment}</span><br />

                                    <Button type='submit' className='btn btn-success m-auto' style={{ width: '100px' }}>Submit</Button>
                                </Form>

                            </div>
                        )
                    }

                </Formik>
            </Card>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(FeedbackForm);