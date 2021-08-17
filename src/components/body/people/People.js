import React from 'react';
import { Modal, CardColumns, ModalBody, ModalFooter, Button } from 'reactstrap';
import PeopleIn from './PeopleIn';
import PeopleDetails from './peopleDetails';
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        description: state.description
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
        if (this.state.peopleSelect != null) {
            peopleDetails = <PeopleDetails people={this.state.peopleSelect} />
        }


        return (
            <div className='container'>
                <div className='row' >
                    <CardColumns>
                        {people}
                    </CardColumns>
                    <Modal isOpen={this.state.isOpen}>
                        <ModalBody>
                            <Button onClick={this.modalToggler}>X</Button>
                            {peopleDetails}
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

export default connect(mapStateToProps)(People);