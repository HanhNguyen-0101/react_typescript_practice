import { FC } from 'react';
import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from './../App';

type CourseGoalList = {
    courses: CGoal[]
};

const CourseGoalList: FC<CourseGoalList> = ({ courses }) => {
    return (
        <ul>
            {courses.map(({ title, desc, id }) => {
                return <li key={id}>
                    <CourseGoal title={title} desc={desc}>
                        <p>Heelo {id}!!!!!</p>
                    </CourseGoal>
                </li>
            })}
        </ul>
    );
};

export default CourseGoalList;