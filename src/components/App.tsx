import { JSX } from 'react'
import Header from './Header/header'
import Container from './Container/container'
import { InputForm } from './InputForm/input-form'
import ToDoList from './ToDoList/ToDoList'

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <InputForm />
        <ToDoList />
      </Container>
    </>
  )
}

export default App
