import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increment} from '../actions/index';

class Photo extends Component { 
    render(){
        const {post, i, comments} = this.props;
        return(
            <div className='main-grid'>
                <Link className='grid' to={`/view/${post.code}`} >
                    <img className='grid-image' src={post.display_src} alt={post.caption} />
                </Link>

                <figcaption>
                    <p>{post.caption}</p>
                </figcaption>

                <div className='likes'>
                    <button onClick={this.props.increment.bind(null, i)}>&hearts; {post.likes}</button>
                    <Link to={`/view/${post.code}`}>
                        <button>&#10052; {comments[post.code] ? comments[post.code].length : 0}</button>
                    </Link>
                </div>
                
            </div>
        )
    }
}


// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ increment: increment },dispatch)
// }

export default connect(null, {increment})(Photo);