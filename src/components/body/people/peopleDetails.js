import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';



const peopleDetails = props => {
    return (

        <div>
            <Card body style={{ marginTop: '10px' }}>
                <CardImg width='100%' src={"http://localhost:3001/Gal-images/" + props.people.image} alt={props.people.name} />

                <CardBody>
                    <CardTitle tag='h4'>Name: {props.people.name}</CardTitle>
                    <h5>Age: {props.people.age}</h5>
                    <h5>Subject: {props.people.subject}</h5>
                    <p style={{ textAlign: 'justify' }}>{props.people.description}</p>
                </CardBody>
            </Card>

        </div>
    );
}

export default peopleDetails;