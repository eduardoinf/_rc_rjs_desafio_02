import { ShoppingCart, Trash } from '@phosphor-icons/react'
import { Button } from '../Button'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { priceFormatter } from '../../utils/formater'
import { InputNumber } from '../InputNumber'
import {
  ResumeCardActions,
  ResumeCardInfo,
  ResumeCardItem,
  ResumeCardPrice,
} from './styled'
import { CoffeeCardProps } from '.'

export type CartItemResumeProps = {
  coffeeId: number
  quantity: number
  price: number
  coffee: CoffeeCardProps
}

export function ResumeCoffeeCard({ ...props }: CartItemResumeProps) {
  const [total, setTotal] = useState(props.quantity)

  const { updateItemInCart } = useContext(CartContext)

  const handleUpdateQuantityCoffeeInCart = () => {
    const updateItem = {
      coffeeId: props.coffeeId,
      quantity: total,
    }

    updateItemInCart(updateItem)
  }

  useEffect(() => {
    handleUpdateQuantityCoffeeInCart()
  }, [total])

  const handleDeleteCoffeeInCart = () => {
    if (confirm('Deseja relamente excluir o item do carrinho?')) {
      console.log('delete ' + props.coffeeId)
    }
  }

  return (
    <ResumeCardItem>
      <img src={props.coffee.image} alt={props.coffee.title} />

      <ResumeCardInfo>
        <h3>{props.coffee.title}</h3>
        <ResumeCardActions>
          <InputNumber setTotal={setTotal} total={total} size="small" />
          <Button variant="secondary" onClick={handleDeleteCoffeeInCart}>
            <Trash size={16} /> Remover
          </Button>
        </ResumeCardActions>
      </ResumeCardInfo>

      <ResumeCardPrice>R$ {priceFormatter.format(props.price)}</ResumeCardPrice>
    </ResumeCardItem>
  )
}
