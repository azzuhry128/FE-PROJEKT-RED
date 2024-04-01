const initialState = {
    contact: 'none'
};

// Action types
const SWITCH_CONTACT = 'SWITCH_CONTACT';
const GET_CONTACT = 'GET_CONTACT';


// Reducer function
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
    case SWITCH_CONTACT:
        return { ...state, contact: action.payload };
    default:
        return state;
    }
};

export default contactReducer;