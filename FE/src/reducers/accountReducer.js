const initialState = {
    accountID: '',
    accountUsername: '',
    accountEmail: '',
    accountBio: '',
};

// Action types
const SET_ACCOUNT = 'SET_ACCOUNT';

// Reducer function
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_ACCOUNT:
        return { 
            ...state, 
            accountID: action.payload.accountID,
            accountUsername: action.payload.accountUsername,
            accountEmail: action.payload.accountEmail, 
            accountBio: action.payload.accountBio, 
        };
    default:
        return state;
    }
};

export default accountReducer;