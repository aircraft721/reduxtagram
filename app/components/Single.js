import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Single extends Component {
    render(){
        const {postId} = this.props.match.params;
        const i = this.props.posts.findIndex((post) => post.code === postId );
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        
        return(
            <div>
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    comments: state.comments
})

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators);
}

export default connect(mapStateToProps)(Single);