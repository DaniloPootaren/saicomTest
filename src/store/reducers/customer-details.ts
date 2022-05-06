import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface customerDetailState {
  value: number
}

const initialState: customerDetailState = {
  value: 0,
}

export const customerDetailSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = customerDetailSlice.actions
  
  export default customerDetailSlice.reducer