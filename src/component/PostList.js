import React from 'react';
import {connect} from 'react-redux';
import {fetchPostAndUsers} from '../actions';
import UserHeader from './UserHeader';


class PostList extends React.Component {
    
    componentDidMount () {
        // calling an Action Creator
        this.props.fetchPostAndUsers();
    }

    renderList() {
        return this.props.posts.map( post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large user middle aligned icon' />
                    <div className='content'>
                        <div className='description'>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

// connecting redux-store & action creator to component
export default connect(mapStateToProps, {fetchPostAndUsers}) (PostList);

// export default connect(null, {fetchPosts}) (PostList);     ES2015 