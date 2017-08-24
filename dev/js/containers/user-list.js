import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {

    render() {
        return (
            <ul>
                <li> one</li>
                <li> two</li>
                <li> three</li>
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);