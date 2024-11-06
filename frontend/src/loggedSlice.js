import { createSlice } from '@reduxjs/toolkit';

export const loggedSlice = createSlice({
  name: 'logged',
  initialState: {
    value: null,
  },
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    setLoggedIn: (state)=>{
        state.value = true
    },
    setLoggedOut: (state)=>{
        state.value = false
    }
  },
});
// export const { increment, decrement } = loggedSlice.actions;
export const { setLoggedIn, setLoggedOut } = loggedSlice.actions;

export const selectLogged = (state) => state.logged.value;

export default loggedSlice.reducer;