import { ReactNode, createContext, useContext } from "react";

type Timer = {
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

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null) {
        throw new Error('TimersContext is null');
    }
    return timersCtx;
}

// TimersContext Provider 
type TimersContextProviderProps = {
    children: ReactNode;
}

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
    const ctx: TimersContextValue = {
        isRunning: false,
        timers: [],
        addTimer() {

        },
        startTimers() {

        },
        stopTimers() {

        },
    }
    return <TimersContext.Provider value={ctx}>
        {children}
    </TimersContext.Provider>
}

export default TimersContextProvider;