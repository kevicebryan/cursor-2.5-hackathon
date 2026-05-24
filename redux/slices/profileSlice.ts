import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabase/client";

type ProfileRecord = {
  id: string;
  username: string;
  hearts: number;
  last_heart_reset: string | null;
  total_items_restored: number;
  updated_at: string | null;
  room_bg: string | null;
};

type ProfileState = {
  profile: ProfileRecord | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: ProfileState = {
  profile: null,
  status: "idle",
  error: null,
};

export const fetchProfileByUserId = createAsyncThunk(
  "profile/fetchByUserId",
  async (userId: string, { rejectWithValue }) => {
    if (!supabase) {
      return rejectWithValue("Supabase client is not configured.");
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (error) {
      return rejectWithValue(error.message);
    }

    return { profile: (data as ProfileRecord | null) ?? null };
  },
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.profile = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileByUserId.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProfileByUserId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload.profile;
      })
      .addCase(fetchProfileByUserId.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) ?? "Failed to fetch profile.";
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
