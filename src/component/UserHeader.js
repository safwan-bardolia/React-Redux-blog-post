import React from 'react';
import {connect} from 'react-redux';


class UserHeader extends React.Component {


    render() {
        
        // when 1st time app is loaded 
        if(!this.props.user) {
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                {this.props.user.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // finding current user from userHeader[] array
    return {user: state.userHeader.find(user => user.id===ownProps.userId)}; 
}

export default connect (mapStateToProps) (UserHeader);
