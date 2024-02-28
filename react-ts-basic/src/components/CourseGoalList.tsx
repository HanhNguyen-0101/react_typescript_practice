import { FC } from 'react';
import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from './../App';

type CourseGoalList = {
    courses: CGoal[],
    onDeleteGoal: (id: string) => void
};

const CourseGoalList: FC<CourseGoalList> = ({ courses, onDeleteGoal }) => {
    return (
        <ul>
            {courses.map((goal) => {
                return <li key={goal.id}>
                    <CourseGoal goal={goal} onDelete={onDeleteGoal}>
                        <p>Heelo {goal.id}!!!!!</p>
                    </CourseGoal>
                </li>
            })}
        </ul>
    );
};

export default CourseGoalList;