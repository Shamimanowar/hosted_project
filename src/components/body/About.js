import React from 'react';

const About = () => {
    return (
        <div className='container'>
            <div>
                <h3 style={{ textAlign: 'center' }}>Photo Gallery Application</h3><hr /><br />
                <div className='row'>
                    <div className='col-6'>
                        <p>This Application is developed by shamim anowar</p>
                        <address>
                            Address -<br />
                            Jhilkanon Abasik<br />
                            151/A/Sophia Manjil
                        </address>
                    </div>
                    <div className='col-6'>
                        <p>This application is created as a project task of bobubrihi full stack web development course with python and JavaScript.It is the first development of React.<br /> Share Here...
                        </p>
                        <img width='80px' height='40px' src='http://localhost:3001/Gal-images/fb.png'
                            style={{ cursor: 'pointer', border: '1px solid #ddd', marginRight: '10px' }} alt='Facebook' />
                        <img width='80px' height='40px' src='http://localhost:3001/Gal-images/insta.jpg'
                            style={{ cursor: 'pointer', border: '1px solid #ddd' }} alt='Insta' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;