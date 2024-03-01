import { ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
}
type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}
type TimersContextValue = TimersState & {
    addTimer: (timer: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
}

const initialState: TimersState = {
    isRunning: false,
    timers: [],
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null) {
        throw new Error('TimersContext is null');
    }
    return timersCtx;
}

type StartTimersAction = {
    type: 'START';
}
type StopTimersAction = {
    type: 'STOP';
}
type AddTimerAction = {
    type: 'ADD';
    payload: Timer
}
type TimersAction = StartTimersAction | StopTimersAction | AddTimerAction;

const timersReducer = (state: TimersState, action: TimersAction): TimersState => {
    switch (action.type) {
        case 'START': {
            return {
                ...state,
                isRunning: true
            }
        }
        case 'STOP': {
            return {
                ...state,
                isRunning: false
            }
        }
        case 'ADD': {
            const timerArr = [ ...state.timers ];
            timerArr.push({
                duration: action.payload.duration,
                name: action.payload.name
            });
            return {
                ...state,
                timers: timerArr
            }
        }
        default: {
            return { ...state }
        }

    }
}

// TimersContext Provider 
type TimersContextProviderProps = {
    children: ReactNode;
}

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {

    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        isRunning: timersState.isRunning,
        timers: timersState.timers,
        addTimer(timer: Timer) {
            dispatch({
                type: 'ADD',
                payload: timer
            });
        },
        startTimers() {
            dispatch({ type: 'START' })
        },
        stopTimers() {
            dispatch({ type: "STOP" })
        },
    }
    return <TimersContext.Provider value={ctx}>
        {children}
    </TimersContext.Provider>
}

export default TimersContextProvider;