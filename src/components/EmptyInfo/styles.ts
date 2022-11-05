import styled from 'styled-components'

export const Container = styled.div`
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
