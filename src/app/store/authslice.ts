import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface InitialState {
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
