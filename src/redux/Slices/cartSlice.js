// import { createSlice } from "@reduxjs/toolkit";


// export const cartSlice = createSlice({
//     name:"cart",
//     initialState:[],
//     reducers:{
//         add:(state,action) => {
//             state.push(action.payload);
//         },
//         remove:(state,action) => {
//             return state.filter((item) => item.id !== action.payload);
//         },
//     }
// });

// export const {add, remove} = cartSlice.actions;
// export default cartSlice.reducer;









import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ ...action.payload, quantity: 1 }); // Initialize quantity to 1
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state[index].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity -= 1;
      }
    },
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
