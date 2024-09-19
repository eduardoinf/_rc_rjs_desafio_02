import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  padding: 0.625rem;

  &.small {
    padding: 0 0.625rem;
  }

  span {
    font-size: 1rem;
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};
    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`
