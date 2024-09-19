import { HeaderContainer } from './styled'
import logo from '../../assets/logo.svg'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Button } from '../Button'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Badge } from '../Badge'

export function Header() {
  const { totalInCart } = useContext(CartContext)

  return (
    <HeaderContainer className="container">
      <NavLink to="/" title="Coffee Delivery - Homepage">
        <img src={logo} alt="Coffee Delivery" />
      </NavLink>
      <nav>
        <span className="label">
          <MapPin weight="fill" size={22} /> Porto Alegre, RS
        </span>

        <NavLink to="/carrinho" title="Histórico">
          <Button variant="cart">
            <ShoppingCart size={22} weight="fill" />
            {totalInCart > 0 && <Badge>{totalInCart}</Badge>}
          </Button>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
