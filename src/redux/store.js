import {configureStore} from '@reduxjs/toolkit';
import authSlice from './dataSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
  },
});
