import React, {Component} from 'react';
import {connect} from 'react-redux';

class userDetail extends Component {
    render() {
        if(!this.props.user){
            return (<h3> Select a user.... </h3>);
        }
        return (
            <div>
                <h2>Name :{this.props.user.first}</h2>
                <h2>Age: {this.props.user.age}</h2>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(userDetail);


