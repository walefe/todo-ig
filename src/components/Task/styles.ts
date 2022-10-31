import styled from 'styled-components'

export const TasksWrapper = styled.ul`
  list-style-type: none;
`

export const TaskContent = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 45.75rem;
  height: 4.75rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;
`

export const CheckTask = styled.input.attrs({
  type: 'checkbox',
})`
  border-radius: 50%;
`
