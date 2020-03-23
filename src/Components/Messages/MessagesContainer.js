import {sendMessage} from '../../redux/messages-reducer';
import Messages from './Messages';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

let mapStateToProps = (state) => ({messagesPage: state.messagesPage});

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withRouter,
    withAuthRedirect
)(Messages);