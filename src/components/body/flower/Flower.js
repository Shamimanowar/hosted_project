import React from 'react';
import { Modal, CardColumns, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';


import FlowerIn from './FlowerIn';
import FlowerDetails from './FlowerDetails';
import FeedbackForm from '../FeedbackForm';
import Comments from '../Comments';


const mapStateToProps = state => {
    return {
        description: state.description,
        comments: state.comments,
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
        let feedbackForm = null;
        if (this.state.selectFlower != null) {
            flowerDetails = <FlowerDetails flower={this.state.selectFlower} />
            feedbackForm = <FeedbackForm rootId={this.state.selectFlower.id} category={this.state.selectFlower.category} />
        }
        //
        let comments = null;
        let match = '';
        if (this.state.selectFlower !== null) {
            match = this.props.comments.filter(item => {
                return item.rootId === this.state.selectFlower.id
            })
        }

        if (match.length !== 0) {
            comments = match.map(comment => {
                return <Comments comment={comment} key={comment.id} />
            })
        }
        //
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

                            <span>
                                {(this.state.selectFlower === null) ? '' : <h3 style={{ marginBottom: '20px' }}>People Comments about {this.state.selectFlower.name}</h3>}
                                {comments === null ? <b style={{ color: 'dodgerblue', fontFamily: 'georgia', fontSize: '20px', margin: '30px' }}>There are no comments</b> : comments}
                            </span><hr color='red' style={{ marginBottom: '20px' }} />


                            {feedbackForm}
                        </ModalBody>
                        <ModalFooter>
                            <Button block onClick={this.modalToggler}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>
        );
    }

}

export default connect(mapStateToProps)(Flower);