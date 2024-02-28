import { FC, ReactNode } from 'react';
import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from './../App';
import InfoBox from './InfoBox';

type CourseGoalList = {
    courses: CGoal[],
    onDeleteGoal: (id: string) => void
};

const CourseGoalList: FC<CourseGoalList> = ({ courses, onDeleteGoal }) => {
    if (!courses || courses.length === 0) {
        return <InfoBox mode='hint'>
            <p>A list hasn't added goal yet. Please add something.</p>
        </InfoBox>
    }

    let warningBox: ReactNode
    if (courses && courses.length >= 4) {
        warningBox = <InfoBox mode='warning' severity='high'>
            <p>A list have a lot of goal. Please don't add more.</p>
        </InfoBox>
    }
    return (
        <>
            {warningBox}
            <ul>
                {courses.map((goal) => {
                    return <li key={goal.id}>
                        <CourseGoal goal={goal} onDelete={onDeleteGoal}>
                            <p>Heelo {goal.id}!!!!!</p>
                        </CourseGoal>
                    </li>
                })}
            </ul>
        </>
    );
};

export default CourseGoalList;