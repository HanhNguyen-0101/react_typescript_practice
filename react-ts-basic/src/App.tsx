import CourseGoal from './components/CourseGoal'
import goalsImg from './assets/react.svg';
import Header from './components/Header';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';

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

  return (
    <main>
      <Header img={{ src: goalsImg, alt: 'A list of goal' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={() => handleAdd('a', 'b')}>Add</button>
      <CourseGoalList courses={courses} />
    </main>
  )
}

export default App
