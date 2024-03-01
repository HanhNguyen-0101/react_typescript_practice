import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Card from './components/Card'
import IconButton from './components/IconButton'
import List from './components/List'
import { useRef } from 'react'
import Form from './components/Form'

const users = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
];

const hobbies = ['Sports', 'Reading', 'Cooking'];

function HeartIcon() {
  return <span>❤️</span>;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSave(data: unknown) {
    const extractData = data as {user: string, phone: string}
    console.log(extractData);

    formRef.current?.clear();
  }

  return (
    <main>
      <section>
        <h2>********Container**********</h2>
        <Container as={Button}>Click me!</Container>
      </section>
      <section>
        <h2>********Card**********</h2>
        <Card
          title="My Card"
          actions={
            <button onClick={() => console.log('Button clicked!')}>
              Click Me!
            </button>
          }
        >
          <section>Some content</section>
        </Card>
      </section>
      <section>
        <h2>********Input**********</h2>
        <Input id='username' label='User name' type='text' ref={inputRef} />
      </section>
      <section>
        <h2>********Button**********</h2>
        <Button style={{ margin: 6 }}>Add</Button>
        <Button style={{ margin: 6 }} href='https://google.com' target='_blank'>More Explore</Button>
      </section>
      <section>
        <h2>********IconButton**********</h2>
        <IconButton icon={HeartIcon} onClick={() => alert('Button clicked!')}>
          Like
        </IconButton>
      </section>
      <section>
        <h2>********List**********</h2>
        <h2>Users</h2>
        <List
          items={users}
          renderItem={(user) => <li key={user.id}>{user.name}</li>}
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List
          items={hobbies}
          renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
        />
      </section>
      <section>
        <h2>********Form**********</h2>
        <Form onSave={handleSave} ref={formRef}>
          <Input id='user' name='user' label='User Name' type='text' />
          <Input id='phone' name='phone' label='Number Phone' type='number' />
          <p>
            <Button>Add</Button>
          </p>
        </Form>
      </section>
    </main>
  )
}

export default App
