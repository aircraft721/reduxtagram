import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/index';
import {bindActionCreators} from 'redux';


const CustomInput = (props) => {
    return (
        <div>
            <input type="text" placeholder='name' ref={props.author}/>
            <input type="text" placeholder='author' ref={props.comment}/>
        </div>
    );
}


class Comments extends Component {
    renderComment(comment,i) {
        return (
            <div key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button>&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {postId} = this.props.match.params;
        // console.log(postId);
        // console.log(this.author.value);
        // console.log(this.comment.value);
        const author = this.author.value;
        const comment = this.comment.value;
        this.props.addComment(postId, author, comment);
    }

    render(){
        return(
            <div>
                {this.props.postComments.map(this.renderComment)}
                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        author={input => this.author = input}
                        comment={input => this.comment = input}
                    />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({ addComment: addComment },dispatch)
}


export default connect(null, mapDispatchToProps)(Comments);