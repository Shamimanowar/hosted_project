import React from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg } from 'reactstrap';

const FlowerIn = props => {

    //console.log()
    return (
        <div>
            <Card body style={{ margin: '10px' }} >
                <CardImg top width='100%' src={"http://localhost:3001/Gal-images/" + props.flower.image} alt={props.flower.name} style={{ opacity: '0.5' }} />
                <CardImgOverlay>
                    <CardTitle style={{ cursor: 'pointer', textAlign: 'center', fontSize: '25px', marginTop: '20px' }} onClick={() => props.flowerSelect(props.flower)}>{props.flower.name}</CardTitle>
                </CardImgOverlay>
            </Card>

        </div >

    );
}

export default FlowerIn;