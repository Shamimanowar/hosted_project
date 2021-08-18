import React from 'react';
import { Modal, CardColumns, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux'

import PeopleIn from './PeopleIn';
import PeopleDetails from './peopleDetails';
import FeedbackForm from '../FeedbackForm';
import Comments from '../Comments';


const mapStateToProps = state => {
    return {
        description: state.description,
        comments: state.comments,
    }
}



class People extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            peopleSelect: null,
        }
    }


    onPeopleSelect = people => {
        this.setState({
            peopleSelect: people
        })
        this.modalToggler();
    };

    modalToggler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }



    render() {
        document.title = 'People';

        let filterPeople = this.props.description.filter(people => {
            return people.category === 'people'
        })
        let people = filterPeople.map(item => {
            return <PeopleIn people={item} key={item.id} peopleSelect={this.onPeopleSelect} />
        })

        let peopleDetails = null;
        let feedbackForm = null;
        if (this.state.peopleSelect != null) {
            peopleDetails = <PeopleDetails people={this.state.peopleSelect} />
            feedbackForm = <FeedbackForm rootId={this.state.peopleSelect.id} category={this.state.peopleSelect.category} />
        }

        let comments = null
        let match = '';
        if (this.state.peopleSelect !== null) {
            match = this.props.comments.filter(item => {
                return item.rootId === this.state.peopleSelect.id
            })
        }

        if (match.length !== 0) {
            comments = match.map(comment => {
                return <Comments comment={comment} key={comment.id} />
            })
        }

        return (
            <div className='container'>
                <div >
                    <CardColumns>
                        {people}
                    </CardColumns>
                    <Modal isOpen={this.state.isOpen}>
                        <ModalBody>
                            <Button onClick={this.modalToggler}>X</Button>
                            {peopleDetails}
                            <span>
                                {(this.state.peopleSelect === null) ? '' : <h3 style={{ marginBottom: '20px' }}>People Comments about {this.state.peopleSelect.name}</h3>}
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

export default connect(mapStateToProps)(People);