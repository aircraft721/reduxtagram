import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Photo extends Component { 
    render(){
        const {post, i, comment} = this.props;
        return(
            <div>
                <div>
                    <Link to={`/view/${post.code}`} >
                        <img src={post.display_src} alt={post.caption} />
                    </Link>
                </div>
            </div>
        )
    }
}