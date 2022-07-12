import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = { isLoggedIn : false, user: null}

export const registersucess = createAction("REGISTER_SUCCESS");
export const registerfall = createAction("REGISTER_FAIL");
export const loginsucess = createAction("LOGIN_SUCCESS");
export const loginfail = createAction("LOGIN_FAIL");
export const logout = createAction("LOGOUT");

export default createReducer(INITIAL_STATE,{
         [registersucess]: (state, action) => ({...state, isLoggedIn: false}),
         [registerfall]: (state, action) => ({...state, isLoggedIn: false}),
         [loginsucess]: (state, action) => ({...state, isLoggedIn: true, user: action.user}),
         [loginfail]: (state, action) => ({...state, isLoggedIn: false, user:null}),
         [logout]: (state, action) => ({...state, isLoggedIn: false, user:null}),
       
});

