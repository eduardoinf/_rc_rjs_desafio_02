import { produce } from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeeCardProps } from '../components/CoffeeCard'

type CartItemProps = {
  coffeeId: number
  quantity: number
  price: number
  coffee: CoffeeCardProps
}

type CartItemUpdateProps = {
  coffeeId: number
  quantity: number
}

type CartContextTypes = {
  cart: CartItemProps[]
  totalInCart: number
  totalInCartPrice: number
  total: number
  deliveryPrice: number

  insertItemInCart: (data: CartItemProps) => void
  updateItemInCart: (data: CartItemUpdateProps) => void
}

const storagedStateAsJSON = localStorage.getItem('@appCoffeeShop:0.0.1')

const cartJsonFormat = storagedStateAsJSON
  ? JSON.parse(storagedStateAsJSON)
  : { cart: [], total: 0 }

export const CartContext = createContext({} as CartContextTypes)

type CartContextProviderProps = {
  children: ReactNode
}

console.log(cartJsonFormat)

const deliveryPrice = 3.5

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItemProps[]>(cartJsonFormat.cart)
  const [totalInCart, setTotalInCart] = useState(cartJsonFormat.total)
  const [totalInCartPrice, setTotalInCartPrice] = useState(0)

  const [total, setTotal] = useState(totalInCartPrice)

  const [showMessage, setShowMessage] = useState(false)

  const insertItemInCart = (data: CartItemProps) => {
    const currentCartItem = cart.findIndex((cart) => {
      return cart.coffeeId === data.coffeeId
    })

    setShowMessage(true)

    if (currentCartItem >= 0) {
      setCart(
        produce(cart, (item) => {
          item[currentCartItem].quantity += data.quantity
          item[currentCartItem].price = data.price
        }),
      )
    } else {
      setCart([...cart, data])
    }

    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  const updateItemInCart = (data: CartItemUpdateProps) => {
    const currentCartItem = cart.findIndex((cart) => {
      return cart.coffeeId === data.coffeeId
    })

    if (currentCartItem >= 0) {
      setCart(
        produce(cart, (item) => {
          item[currentCartItem].quantity = data.quantity
        }),
      )
    }
  }

  const updateTotalCart = () => {
    setTotalInCart(
      cart.reduce((acc, item) => {
        return acc + item.quantity
      }, 0),
    )
  }

  const updateTotalCartPrice = () => {
    const resume = cart.reduce((acc, item) => {
      return acc + item.quantity * item.price
    }, 0)
    setTotalInCartPrice(resume)
    setTotal(resume + deliveryPrice)
  }

  useEffect(() => {
    const stateJSON = { cart, total: totalInCart }
    localStorage.setItem('@appCoffeeShop:0.0.1', JSON.stringify(stateJSON))
    updateTotalCart()
    updateTotalCartPrice()
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        insertItemInCart,
        totalInCart,
        updateItemInCart,
        totalInCartPrice,
        total,
        deliveryPrice,
      }}
    >
      {children}

      <div
        style={{
          position: 'fixed',
          margin: '0 auto',
          PointerEvent: 'none',
          bottom: showMessage ? '0px' : '-30px',
          height: '30px',
          width: '300px',
          left: '0',
          right: '0',
          textAlign: 'center',
          background: 'green',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          transition: 'all ease-in-out 0.4s',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '0.875rem',
        }}
      >
        Adicionado com sucesso
      </div>
    </CartContext.Provider>
  )
}
