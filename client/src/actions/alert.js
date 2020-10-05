import { SET_ALERT, REMOVE_ALERT } from './types';
// import uuid from 'uuid';
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {

    // const id = uuid.v1();
    //CAAANOT RUN UUID
    const id = Math.random();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};