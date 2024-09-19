import { ComponentProps } from 'react'
import { ButtonContainer, ButtonVariant } from './styled'

type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <ButtonContainer variant={variant} {...props} />
}
