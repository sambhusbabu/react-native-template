import {createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {authUser: null, user: null},
  reducers: {
    updateAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    updateUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {updateAuthUser, updateUserData} = dataSlice.actions;
export default dataSlice.reducer;
