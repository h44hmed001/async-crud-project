import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create User
export const createUser = createAsyncThunk(
  "createUser",
  async (user, { rejectWithValue }) => {
    const response = await fetch(
      "https://656b24f6dac3630cf727bfa7.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    try {
      return await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// Delete User

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://656b24f6dac3630cf727bfa7.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      return await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// Read Users

export const readUsers = createAsyncThunk("readUsers", async () => {
  const data = await fetch("https://656b24f6dac3630cf727bfa7.mockapi.io/crud");
  return data.json();
});

//Update Users
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://656b24f6dac3630cf727bfa7.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      return await response.json();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const crudSlice = createSlice({
  name: "crudSlice",
  initialState: { users: [], loading: false, error: true },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
      state.loading = false;
    },
    [createUser.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    [readUsers.pending]: (state) => {
      state.loading = true;
    },
    [readUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = false;
    },
    [readUsers.rejected]: (state, action) => {
      state.error = true;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.users = state.users.filter((item) => item.id !== action.payload.id);
      state.loading = false;
      state.error = false;
    },
    [deleteUser.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.users = state.users.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.loading = false;
      state.error = false;
    },
    [updateUser.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
    },
  },
});
export default crudSlice.reducer;
