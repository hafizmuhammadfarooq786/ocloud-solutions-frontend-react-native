import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TravelPlan {
  id: string;
  country: string;
  details: string;
}

const travelPlansSlice = createSlice({
  name: "travelPlans",
  initialState: [] as TravelPlan[],
  reducers: {
    addPlan: (state, action: PayloadAction<TravelPlan>) => {
      state.push(action.payload);
    },
    removePlan: (state, action: PayloadAction<string>) => {
      return state.filter((plan) => plan.id !== action.payload);
    },
  },
});

export const { addPlan, removePlan } = travelPlansSlice.actions;
export default travelPlansSlice.reducer;
