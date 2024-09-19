import { Minus, Plus } from '@phosphor-icons/react'
import { InputNumberContainer } from './styled'

export type InputNumberSize = 'normal' | 'small'

type InputNumber = {
  setTotal: () => void
  total: number
  size?: InputNumberSize
}

const InputNumberVariants = {
  normal: 'normal',
  small: 'small',
}

export function InputNumber({ setTotal, total, size }: InputNumber) {
  const addTotal = () => {
    console.log(total)
    setTotal((state) => state + 1)
  }

  const removeTotal = () => {
    if (total > 1) {
      setTotal((state) => state - 1)
    }
  }

  return (
    <InputNumberContainer className={InputNumberVariants[size]}>
      <a onClick={removeTotal}>
        <Minus size={16} />
      </a>
      <span>{total}</span>
      <a onClick={addTotal}>
        <Plus size={16} />
      </a>
    </InputNumberContainer>
  )
}
