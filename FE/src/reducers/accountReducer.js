const initialState = {
    username: null,
    email: null,
    isLoggedIn: false,
};

// Action types
const SET_USERNAME = 'SET_USERNAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';

// Reducer function
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USERNAME:
        return { ...state, username: action.payload };
    case SET_EMAIL:
        return { ...state, email: action.payload };
    case SET_PASSWORD:
        return { ...state, password: action.payload };
    default:
        return state;
    }
};

export default accountReducer;