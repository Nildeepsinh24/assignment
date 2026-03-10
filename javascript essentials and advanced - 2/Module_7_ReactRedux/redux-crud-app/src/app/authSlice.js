import { createSlice } from '@reduxjs/toolkit';

// Simulating a dummy auth state. In a real app this would hit an API via thunks.
const initialState = {
    user: null, // null means not logged in
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            // Expecting { username, password } in payload
            state.user = action.payload.username;
            state.isAuthenticated = true;
        },
        register: (state, action) => {
            // Registration also automatically logs them in for this demo
            state.user = action.payload.username;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
