import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;

  nav {
    display: flex;
    gap: 0.5rem;

    span.label {
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      height: 2.375rem;
      border-radius: 6px;
      border: 0;
      font-size: 0.875rem;
      gap: 0.25rem;

      background-color: ${(props) => props.theme['purple-300']};
      color: ${(props) => props.theme['purple-500']};
    }
  }
`
