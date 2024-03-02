import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "../components/Sessions/SessionList";

type SessionState = {
    upcomingSessions: Session[];
}

const initialState: SessionState = {
    upcomingSessions: []
}

const SessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        bookSession: (state: SessionState, action: PayloadAction<Session>) => {
            const itemIdx = state.upcomingSessions.findIndex(i => i.id === action.payload.id);
            if (itemIdx === -1) {
                state.upcomingSessions.push({ ...action.payload });
            }
        },
        cancelSession: (state: SessionState, action: PayloadAction<string>) => {
            const itemIdx = state.upcomingSessions.findIndex(i => i.id === action.payload);
            if (itemIdx !== -1) {
                state.upcomingSessions = state.upcomingSessions.filter(i => i.id !== action.payload);
            }
        }
    }
});

export const { bookSession, cancelSession } = SessionSlice.actions;

export default SessionSlice;