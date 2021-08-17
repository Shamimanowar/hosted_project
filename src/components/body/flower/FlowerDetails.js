import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const FlowerDetails = props => {
    return (
        <div>
            <Card body style={{ marginTop: '10px' }}>
                <CardImg width='100%' src={props.flower.image} alt={props.flower.name} />
            </Card>
            <CardBody>
                <CardTitle>Name: {props.flower.name}</CardTitle>
                <p style={{ textAlign: 'justify' }}>{props.flower.description}</p>
            </CardBody>
        </div>
    );
}

export default FlowerDetails;