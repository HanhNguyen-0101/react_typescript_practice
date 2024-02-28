import CourseGoal from './components/CourseGoal'
import goalsImg from './assets/react.svg';
import Header from './components/Header';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export type CourseGoal = {
  id: string,
  title: string,
  desc: string
}

function App() {
  const [courses, setCourses] = useState<CourseGoal[]>([]);

  function handleAdd(title: string, desc: string) {
    setCourses(prevCourses => {
      const newCourse: CourseGoal = {
        id: Math.random().toString(),
        title,
        desc
      }
      return [
        ...prevCourses,
        newCourse
      ]
    })
  }

  function handDeleteGoal(id: string) {
    setCourses(prevCourse => {
      return prevCourse.filter(course => course.id !== id);
    });
  }

  return (
    <main>
      <Header img={{ src: goalsImg, alt: 'A list of goal' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onSubmit={handleAdd} />
      <CourseGoalList courses={courses} onDeleteGoal={handDeleteGoal} />
    </main>
  )
}

export default App
