import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { postLogin } from '../apiService';

interface AuthState {
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false,
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            await postLogin(credentials);
            return true;  // Assuming login success if no error is thrown
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<boolean>) => {
                state.isLoggedIn = action.payload;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoggedIn = false;
            });
    },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;