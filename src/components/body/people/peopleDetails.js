import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const peopleDetails = props => {
    return (

        <div>
            <Card body style={{ marginTop: '10px' }}>
                <CardImg width='100%' src={props.people.image} alt={props.people.name} />
            </Card>
            <CardBody body>
                <CardTitle>Name: {props.people.name}</CardTitle>
                <h4>Age: {props.people.age}</h4>
                <h4>Subject: {props.people.subject}</h4>
                <p style={{ textAlign: 'justify' }}>{props.people.description}</p>
            </CardBody>

        </div>
    );
}

export default peopleDetails;