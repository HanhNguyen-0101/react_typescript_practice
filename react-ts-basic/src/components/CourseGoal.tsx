import { FC, PropsWithChildren, ReactNode } from "react";

// interface CourseGoalProps {
//     title: string;
//     desc: string;
//     children: ReactNode;
// }

// using with PropsWithChildren
type CourseGoalProps = PropsWithChildren<{title: string, desc: string}>;

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

const CourseGoal: FC<CourseGoalProps> = ({title, desc, children}) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
                {children}
            </div>
            <button>delete</button>
        </article>
    );
};

export default CourseGoal;