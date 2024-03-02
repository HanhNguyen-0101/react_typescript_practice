import { configureStore } from "@reduxjs/toolkit";
import SessionSlice from "./session-slice";

export const store = configureStore({
    reducer: {
        session: SessionSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;