import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Single extends Component {
    render(){
        const i = this.props.posts.findIndex((post) => post.code === this.props.match.params.postId );
        const post = this.props.posts[i];
        
        return(
            <div>
                <Photo i={i} post={post} {...this.props} />
                <Comments />
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