import {createSlice} from '@reduxjs/toolkit';

interface State {
  isLoggedIn: boolean;
}

const initialState: State = {
  isLoggedIn: false,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSession: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {setUserSession} = userReducer.actions;

export default userReducer.reducer;
