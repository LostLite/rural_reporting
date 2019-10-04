import { Component } from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../../store/actions/userActions';

class index extends Component {

    componentDidMount(){
        this.props.logUserOut();
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserOut: () => dispatch(logUserOut())
    }
}

export default connect(null, mapDispatchToProps)(index);
