import styled from 'styled-components'

export const TasksWrapper = styled.ul`
  list-style-type: none;
`

export const TaskContent = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 45.75rem;
  height: 4.75rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  background: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;

  & + li {
    margin-top: 12px;
  }
`

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0.3rem;
  border: none;
  cursor: pointer;
  background: inherit;

  svg {
    color: ${(props) => props.theme['gray-300']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-400']};
    transition: background 0.2s, color 0.2s;
    svg {
      color: ${(props) => props.theme.danger};
    }
  }
`

export const CheckTask = styled.div`
  width: 1.3em;
  height: 1.3em;
  background-color: ${(props) => props.theme['gray-500']};
  border-radius: 50%;
  vertical-align: middle;
  border: 2px solid ${(props) => props.theme.blue};
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  input[type='checkbox']:checked {
    visibility: hidden;
    background-color: gray;
  }
`
