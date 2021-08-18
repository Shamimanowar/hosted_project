import React from 'react';
// import Loading from './Loading';
import { CardText } from 'reactstrap';

const Home = () => {
    return (
        <div className='container'>
            <div className='m-auto'>
                <h2 style={{ textAlign: 'center' }}>Photo Gallery Application</h2>
                <CardText className='col-sm-7 m-auto' style={{ fontSize: '20px' }}>
                    This app is created for viewing various photos and taking feedback from visitor.
                    It is created in August 2021. This app is not completed fully. Sign In, Sign Up prosses is
                    not added till now. It is just for Home Work.
                </CardText>
            </div>

        </div>
    );
}

export default Home;