import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface registerState{
  name: string;
  email: string;
  password: string;
  profileImage: string;
  role: string;
}

const initialState: registerState = {
  name: '',
  email: '',
  password: '',
  profileImage: '',
  role: '',
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: { 
    setName(state, action:PayloadAction<string>) {
      state.name = action.payload;
    },
    setEmail(state, action:PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action:PayloadAction<string>) {
      state.password = action.payload;
    },
    setProfileImage(state, action:PayloadAction<string>) {
      state.profileImage = action.payload;
    },
    setRole(state, action:PayloadAction<string>) {
      state.role = action.payload;
    },
  },
})

export const { setName, setEmail, setPassword, setProfileImage, setRole } = registerSlice.actions;
export default registerSlice.reducer;