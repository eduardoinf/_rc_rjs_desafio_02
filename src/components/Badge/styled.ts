import styled from 'styled-components'

export const BadgeContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  background: ${(props) => props.theme['yellow-500']};
  border-radius: 100%;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  font-size: 0.75rem;
  font-weight: 900;
  color: #fff;
`
