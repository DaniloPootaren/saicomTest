import { createSlice } from "@reduxjs/toolkit";
import { ViewAddressesResponeData } from "../../models";
import { fetchAddresses, updateAddress } from "../actions";

export interface AddressesState {
  addresses: ViewAddressesResponeData;
  loading: boolean;
}

const initialState: AddressesState = {
  addresses: { data: [], links: { current: "", last: "", next: "" } },
  loading: false,
};

export const AddressesSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GetAllAddresses
    builder.addCase(fetchAddresses.pending, (state, _action) => {
      state.loading = true;
    });

    builder.addCase(fetchAddresses.fulfilled, (state, action) => {
      state.addresses.data = state.addresses.data.concat(action.payload.data);
      state.addresses.meta = action.payload.meta;
      state.addresses.links = action.payload.links;
      state.loading = false;
    });

    builder.addCase(fetchAddresses.rejected, (state, _action) => {
      state.loading = false;
    });
    // UpdateAddress
    builder.addCase(updateAddress.pending, (state, _action) => {
      state.loading = true;
    });

    builder.addCase(updateAddress.fulfilled, (state, action) => {
      const updatedAddress = action.payload;
      const updatedAddresses = state.addresses.data.map((item) =>
        item.addressId === updatedAddress.addressId ? updatedAddress : item
      );

      state.addresses.data = updatedAddresses;
      state.loading = false;
    });

    builder.addCase(updateAddress.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export default AddressesSlice.reducer;
