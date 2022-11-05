import styled from 'styled-components'

export const Container = styled.div`
  input {
    display: none;
  }

  input + label::before {
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['gray-500']};
    border: 2px solid ${(props) => props.theme.blue};
    vertical-align: middle;
    margin-right: 1rem;
    display: inline-block;
  }

  input:checked + label::before {
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
    background-position: center;
    background-color: ${(props) => props.theme.purpleDark};
    border: 2px solid ${(props) => props.theme.purpleDark};
  }

  input:checked + label {
    color: ${(props) => props.theme['gray-300']};
    text-decoration: line-through;
  }
`
