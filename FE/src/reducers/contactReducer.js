const initialState = {
    contact_id: '',
    contact_username: '',
    contact_email: '',
};

// Action types
const SWITCH_CONTACT = 'SWITCH_CONTACT';

// Reducer function
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
    case SWITCH_CONTACT:
        return { 
            ...state, 
            contact_id: action.payload.id, 
            contact_username: action.payload.username, 
            contact_email: action.payload.email 
        };
    default:
        return state;
    }
};

export default contactReducer;