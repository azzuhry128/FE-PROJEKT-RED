// messageReducer.js

// Initial state for chat messages
const initialState = {
    messages: [],
};

// Action types
const ADD_MESSAGE = 'ADD_MESSAGE';
// const EDIT_MESSAGE = 'EDIT_MESSAGE'; // New action type for editing messages
// const DELETE_MESSAGES = 'DELETE_MESSAGES';

// Reducer function
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_MESSAGE:
        return { ...state, messages: [...state.messages, action.payload] };
    default:
        return state;
    }
};

export default messageReducer;
