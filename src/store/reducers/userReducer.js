import { LOG_USER_IN,LOG_USER_OUT } from '../../constants/action-types';

const initState = {
    activeUser: {},
    loggedIn: false
}

const userReducer = (state= initState, action) =>{

    switch(action.type){
        case LOG_USER_IN:
            return Object.assign({}, state, { activeUser: action.payload, loggedIn:true});
        case LOG_USER_OUT:
            return Object.assign({}, state, { activeUser: action.payload, loggedIn:false});
        default:
            return state;
    }
};

export default userReducer;