import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Body from '../components/body/Body';
import { loadDescription, loadComments } from '../redux/actionCreators';

const mapDispatchToProps = dispatch => {
    return {
        loadDescription: () => dispatch(loadDescription()),
        loadComments: () => dispatch(loadComments())
    }
}

class MainComponent extends React.Component {
    componentDidMount() {
        this.props.loadDescription();
        this.props.loadComments();
    }

    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(MainComponent);