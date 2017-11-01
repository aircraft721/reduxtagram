import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import Main from './Main';

const mapStateToProps = (state) => ({
    posts: state.posts,
    comments: state.comments
})

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;