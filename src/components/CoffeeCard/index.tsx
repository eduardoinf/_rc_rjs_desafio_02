import { ShoppingCart } from '@phosphor-icons/react'
import { CardInfo, CardItem, CardOperator, CardPrice, CardTags } from './styled'
import { Button } from '../Button'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Badge } from '../Badge'

import { priceFormatter } from '../../utils/formater'
import { InputNumber } from '../InputNumber'

export type CoffeeCardProps = {
  id: number
  title: string
  description: string
  image: string
  price: number
  tags: string[]
}

export function CoffeeCard({ ...props }: CoffeeCardProps) {
  const [total, setTotal] = useState(1)

  const { insertItemInCart } = useContext(CartContext)

  const handleCoffeeInCart = () => {
    const newItem = {
      coffeeId: props.id,
      quantity: total,
      price: props.price,
      coffee: props,
    }

    insertItemInCart(newItem)
    setTotal(1)
  }

  return (
    <CardItem>
      <img src={props.image} alt={props.title} />
      <CardTags>
        {props?.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </CardTags>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <CardInfo>
        <CardPrice>
          <small>R$</small> {priceFormatter.format(props.price)}
        </CardPrice>

        <InputNumber setTotal={setTotal} total={total} />

        <Button onClick={handleCoffeeInCart} variant="icon">
          <ShoppingCart size="20" weight="fill" />
        </Button>
      </CardInfo>
    </CardItem>
  )
}
