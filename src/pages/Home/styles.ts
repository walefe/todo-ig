import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
`
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background: ${(props) => props.theme['gray-700']};
`

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: -27px;
`

export const InputForm = styled.input`
  flex: 1;
  padding: 1rem;
  background: ${(props) => props.theme['gray-500']};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purpleDark};
  }
`

export const ButtonForm = styled.button`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 90px;
  height: 52px;
  padding: 1rem;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.blueDark};
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.4;
  }

  :hover {
    background: ${(props) => props.theme.blue};
    transition: background 0.2s;
  }
`

export const Main = styled.main`
  max-width: 46rem;
  margin: 4rem auto 0;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CreatedTasks = styled.span`
  color: ${(props) => props.theme.blue};
  font-weight: bold;

  span {
    width: 25px;
    height: 19px;
    padding: 2px 8px;
    border-radius: 999px;
    margin-left: 8px;
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-200']};
  }
`

export const TasksDone = styled.span`
  color: ${(props) => props.theme.purple};
  font-weight: bold;

  span {
    width: 25px;
    height: 19px;
    padding: 2px 8px;
    border-radius: 999px;
    margin-left: 8px;
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-200']};
  }
`

export const TasksContainer = styled.div`
  max-width: 46rem;
  margin: 1.5rem auto 0;
`

export const EmptyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  padding: 4rem 1.5rem;
  font-size: 1rem;
  line-height: 22.4px;
  color: ${(props) => props.theme['gray-300']};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  span {
    font-weight: bold;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    margin-bottom: 1rem;
  }
`
