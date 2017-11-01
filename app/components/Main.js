import React, {Component} from 'react';
import Photo from './Photo';

export default class Main extends Component {
    render(){
        
        return (
            <div>
                <h1>
                     Reduxtagram
                </h1>
                {this.props.posts.map((post, i) => {
                    return <Photo key={i} {...this.props} post={post}/>
                })}
            </div>
        )
    }
}


// {React.cloneElement(this.props.children, this.props)}