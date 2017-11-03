import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addComment, removeComment} from '../actions/index';
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
    handleSubmit = (e) => {
        e.preventDefault();
        const {postId} = this.props.match.params;
        const author = this.author.value;
        const comment = this.comment.value;
        this.props.addComment(postId, author, comment);
    }

    render(){
        return(
            <div>
                {this.props.postComments.map((comment, i)=>{
                    return (
                        <div key={i}>
                            <span className='span1'>{comment.user}</span>
                            <span className='span2'>{comment.text}</span>
                            <button onClick={this.props.removeComment.bind(null, this.props.match.params.postId, i)}>&times;</button>
                        </div>
                    )
                })}

                <button onClick={this.props.removeComment.bind(null)}>&times;</button>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        author={input => this.author = input}
                        comment={input => this.comment = input}
                    />
                    <input type="submit" 
                        onClick={this.resetInput}
                    />
                </form>
            </div>
        );
    }
}

export default connect(null, {addComment, removeComment})(Comments);