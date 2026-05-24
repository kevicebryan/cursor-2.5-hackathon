import { createSlice } from "@reduxjs/toolkit";
import type { CollectionArtifact } from "@/lib/types/collection";

type CollectionState = {
  items: CollectionArtifact[];
  unlockedIds: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: CollectionState = {
  items: [],
  unlockedIds: [],
  status: "idle",
  error: null,
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    clearCollection: (state) => {
      state.items = [];
      state.unlockedIds = [];
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { clearCollection } = collectionSlice.actions;
export const collectionReducer = collectionSlice.reducer;
