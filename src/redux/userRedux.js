import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../redux/api.js';

export const login = createAsyncThunk(
  'auth/login',
  async ({ formValue, navigate, toast, redirect }, { rejectWithValue }) => {
    try {
      const response = await api.login(formValue);
      toast.success('Login Succesfull');
      navigate(redirect || '/');
      return response.data;
    } catch (error) {
      //rejectWithValue - capture error coming from backend
      return rejectWithValue(error.response.data);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.register(formValue);
      toast.success('registered Succesfull');
      navigate('/');
      return response.data;
    } catch (error) {
      //rejectWithValue - capture error coming from backend
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    // isFetching: false,
    error: '',
    loading: false,
  },

  reducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      state.currentUser = action.payload;
    },
    [login.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      state.currentUser = action.payload;
    },
    [register.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },

  // reducers: {
  //   loginStart: (state) => {
  //     state.isFetching = true;
  //   },
  //   loginSuccess: (state, action) => {
  //     state.isFetching = false;
  //     state.currentUser = action.payload;
  //   },
  //   loginFailure: (state) => {
  //     state.isFetching = false;
  //     state.error = true;
  //   },
  // },
});

// export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
