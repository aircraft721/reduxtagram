import React,{Component} from 'react';

export default class Comments extends Component {

    // componentDidMount(){
    //     console.log(this.inputName);
    //     console.log(this.inputAuthor);
    // }
    
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
        // //const {postId} = this.props.match.params;
        // const author = this.refs.author.value;
        // const comment = this.refs.comment.value;
        // console.log( author, comment);
        console.log(this.firstName.value);
        console.log(this.inputAuthor.value);
        
        //console.log(this.inputAuthor);
        // console.log(this.refs.inputName.value);
        // console.log(this.refs.inputAuthor.value);
    }

    //ref={input => this.textInput = input} 
    render(){
        return(
            <div>
                {this.props.postComments.map(this.renderComment)}
                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        firstName={input => this.firstName = input}
                        inputAuthor={input => this.inputAuthor = input}
                    />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

// <input 
// type="text" 
// inputName = {(input) => this.inputName = input }
// placeholder="name"
// />
// <input 
// type="text" 
// inputAuthor = {(input) => this.inputAuthor = input }
// placeholder="author"
// />

const CustomInput = (props) => {
    return (
        <div>
            <input type="text" placeholder='name' ref={props.firstName}/>
            <input type="text" placeholder='author' ref={props.inputAuthor}/>
        </div>
    );
}