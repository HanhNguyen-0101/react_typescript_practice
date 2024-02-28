import { FC, FormEvent, useRef } from "react";

type Goal = {
    onSubmit: (goal: string, summary: string) => void
}

const NewGoal: FC<Goal> = ({onSubmit}) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const goalInput = goal.current!.value;
        const summaryInput = summary.current!.value;
    
        onSubmit(goalInput, summaryInput);
    
        event.currentTarget.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input ref={goal} type="text" name="goal"/>
                <label>Goal</label>
            </div>
            <div>
                <input ref={summary} type="text" name="summary"/>
                <label>Summary</label>
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default NewGoal;