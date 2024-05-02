const initialState = {
    accountID: '',
    accountUsername: '',
    accountEmail: '',
    accountImage: '',
    accountBio: '',
};

// Action types
const FETCH_ACCOUNT = 'FETCH_ACCOUNT';

// Reducer function
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_ACCOUNT:
        return { 
            ...state, 
            accountID: action.payload.accountID,
            accountUsername: action.payload.accountUsername,
            accountEmail: action.payload.accountEmail, 
            accountImage: action.payload.accountImage,
            accountBio: action.payload.accountBio, 
        };
    default:
        return state;
    }
};

export default accountReducer;