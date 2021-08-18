import React from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg } from 'reactstrap';

const PeopleIn = props => {

    //console.log()
    return (
        <div>
            <Card body style={{ margin: '10px' }} >
                <CardImg top width='100%' src={"http://localhost:3001/Gal-images/" + props.people.image} alt={props.people.name} style={{ opacity: '0.5' }} />
                <CardImgOverlay>
                    <CardTitle style={{ cursor: 'pointer', textAlign: 'center', fontSize: '25px', marginTop: '20px' }} onClick={() => props.peopleSelect(props.people)}>{props.people.name}</CardTitle>
                </CardImgOverlay>
            </Card>

        </div >

    );
}

export default PeopleIn;