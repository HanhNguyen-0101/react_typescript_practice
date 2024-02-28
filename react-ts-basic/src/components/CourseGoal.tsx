import { FC, PropsWithChildren, ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";

// interface CourseGoalProps {
//     title: string;
//     desc: string;
//     children: ReactNode;
// }

type CGoalProps = {
    goal: CGoal,
    onDelete: (id: string) => void
}
// using with PropsWithChildren
type CourseGoalProps = PropsWithChildren<CGoalProps>;

// function CourseGoal({title, desc, children}: CourseGoalProps) {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{desc}</p>
//                 {children}
//             </div>
//             <button>delete</button>
//         </article>
//     );
// }

const CourseGoal: FC<CourseGoalProps> = ({ goal, children, onDelete }) => {
    const { id, title, desc } = goal;
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>delete</button>
        </article>
    );
};

export default CourseGoal;