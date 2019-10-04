import { LOG_USER_IN, LOG_USER_OUT } from '../../constants/action-types';

export const logUserIn = loggedInUser => {return {type: LOG_USER_IN, payload: loggedInUser}}
export const logUserOut = () => { return { type:LOG_USER_OUT}}