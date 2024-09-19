import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'icon' | 'cart'
export type ButtonTextSize = 'large' | 'medium' | 'small' | 'extrasmall'

interface ButtonContainerProps {
  variant: ButtonVariant
  size: ButtonTextSize
}

const ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  icon: 'icon',
  cart: 'cart',
}

const ButtonTextSize = {
  large: 'inherit ',
  medium: 'medium',
  small: 'small',
  extrasmall: 'extrasmall',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  padding: 0.5rem;
  height: 2.375rem;
  border-radius: 6px;
  border: 0;
  font-size: 0.875rem;
  font-weight: bold;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['yellow-500']};
  color: white;
  min-width: 8.25rem;

  &:hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }

  transition: all ease-in-out 0.2s;
  cursor: pointer;

  ${(props) => {
    if (ButtonVariants[props.variant] === 'secondary')
      return css`
        font-weight: 400;
        padding: 0.4rem 0.625rem;
        height: 2rem;
        min-width: auto;
        text-transform: uppercase;
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-900']};
        font-size: 0.75rem;
        &:hover {
          background-color: ${(props) => props.theme['gray-500']};
          color: ${(props) => props.theme['gray-800']};
        }
        svg {
          fill: ${(props) => props.theme['purple-500']};
        }
      `

    if (ButtonVariants[props.variant] === 'icon')
      return css`
        min-width: auto;
        background-color: ${(props) => props.theme['purple-700']};
        color: ${(props) => props.theme.white};
        &:hover {
          background-color: ${(props) => props.theme['purple-500']};
        }
      `

    if (ButtonVariants[props.variant] === 'cart')
      return css`
        min-width: auto;
        background-color: ${(props) => props.theme['yellow-300']};
        color: ${(props) => props.theme['yellow-700']};
        &:hover {
          background-color: ${(props) => props.theme['yellow-700']};
          color: white;
        }
      `
  }}
`
