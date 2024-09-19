import { ComponentProps } from 'react'
import { BadgeContainer } from './styled'

type BadgeProps = ComponentProps<'span'>

export function Badge({ ...props }: BadgeProps) {
  return <BadgeContainer {...props} />
}
