import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    setCompleted: false,
    plan: null,
    slug: null,
    planData: null
  },
  reducers: {
    userData: (state, action) => {
      state.user = action.payload;
    },

    planDuration: (state , action) => {
      state.plan = action.payload;
    },

    stepComplete: (state) => {
      state.setCompleted = true;
    },
    reset: (state) => {
      state.setCompleted = false;
    },
    slugData: (state , action) => {
      state.slug = action.payload
    },
    planData: (state , action) => {
      state.planData = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { userData, stepComplete, reset , planDuration ,  slugData , planData} = userSlice.actions;

export default userSlice.reducer;


