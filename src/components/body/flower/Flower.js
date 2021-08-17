import React from 'react';
import FlowerIn from './FlowerIn';
import FlowerDetails from './FlowerDetails';
import { Modal, CardColumns, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        description: state.description
    }
}


class Flower extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            selectFlower: null
        }
    }

    onFlowerSelect = flower => {
        this.setState({ selectFlower: flower });
        this.modalToggler();
    }
    modalToggler = () => this.setState({ isOpen: !this.state.isOpen });

    render() {

        let filterFlower = this.props.description.filter(flower => {
            return flower.category === 'flower';
        })

        let flowers = filterFlower.map(flower => {
            return <FlowerIn flower={flower} key={flower.id} flowerSelect={this.onFlowerSelect} />
        })

        let flowerDetails = null;
        if (this.state.selectFlower != null) {
            flowerDetails = <FlowerDetails flower={this.state.selectFlower} />
        }
        return (
            <div className='container'>
                <div className='row' >
                    <CardColumns>
                        {flowers}
                    </CardColumns>
                    <Modal isOpen={this.state.isOpen}>
                        <ModalBody>
                            <Button onClick={this.modalToggler}>X</Button>
                            {flowerDetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.modalToggler}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>
        );
    }

}

export default connect(mapStateToProps)(Flower);