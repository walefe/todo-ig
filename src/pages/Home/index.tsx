import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { PlusCircle } from 'phosphor-react'
import {
  ButtonForm,
  Container,
  CreatedTasks,
  Form,
  Header,
  Info,
  InputForm,
  Main,
  TasksContainer,
  TasksDone,
} from './styles'

import Logo from '../../assets/Logo.svg'
import { Tasks } from '../../components/Task'
import { EmptyInfo } from '../../components/EmptyInfo'

export interface TasksProps {
  id: string
  content: string
  isChecked: boolean
}

export function Home() {
  const [inputContent, setInputContent] = useState('')
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [tasksDone, setTasksDone] = useState(0)

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newTask = {
      id: uuid(),
      content: inputContent,
      isChecked: false,
    }
    setTasks((state) => [...state, newTask])
    setInputContent('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('')
    setInputContent(event.target.value)
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleDeleteTask(taskId: string) {
    const removedTask = tasks.filter((task) => task.id !== taskId)
    setTasks(removedTask)
  }

  useEffect(() => {
    const done = tasks.reduce((acc, currentValue) => {
      if (currentValue.isChecked) acc++
      return acc
    }, 0)
    setTasksDone((state) => done)
  }, [tasks])

  const isNewTaskEmpty = inputContent.length === 0
  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo to-do" />
      </Header>

      <Form onSubmit={handleCreateTask}>
        <InputForm
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          value={inputContent}
          required
        />
        <ButtonForm type="submit" disabled={isNewTaskEmpty}>
          <span>Criar</span>
          <PlusCircle size={16} weight="bold" />
        </ButtonForm>
      </Form>

      <Main>
        <Info>
          <CreatedTasks>
            Tarefas criadas
            <span>{tasks.length}</span>
          </CreatedTasks>

          <TasksDone>
            Concluídas
            <span>{`${tasksDone} de ${tasks.length}`}</span>
          </TasksDone>
        </Info>
        <TasksContainer>
          {tasks.length <= 0 ? (
            <EmptyInfo />
          ) : (
            <Tasks
              tasks={tasks}
              deleteTask={handleDeleteTask}
              handleTaskOnCheck={setTasks}
            />
          )}
        </TasksContainer>
      </Main>
    </Container>
  )
}
