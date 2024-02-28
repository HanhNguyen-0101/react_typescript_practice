import CourseGoal from './components/CourseGoal'
import goalsImg from './assets/react.svg';
import Header from './components/Header';

function App() {

  return (
    <main>
      <Header img={{src: goalsImg, alt: 'A list of goal'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title='A1' desc='hello'>
        <p>Heelo!!!!!</p>
      </CourseGoal>
    </main>
  )
}

export default App
