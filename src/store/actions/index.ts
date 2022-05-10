import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Address } from "../../models";

import api from "../../api"



export const fetchAddresses = createAsyncThunk(
    "address/fetchAllAddresses",
    async (pageNumber: number) => {
      const response = await api.getAllAddresses(pageNumber);
      return response.data;
    }
  ) as any;
  
  export const updateAddress = createAsyncThunk(
    "address/updateAddresses",
    async (address: Address) => {
      const response = await api.updateAddress(
        address.addressId as string,
        address
      );

      toast("Address updated", {
        type: "info",
        theme: "light",
        autoClose: 1000,
      });
      return response.data;
    }
  ) as any;