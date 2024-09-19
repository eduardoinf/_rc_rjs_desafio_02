import { useContext } from 'react'
import {
  CartContainer,
  FieldsetFormBody,
  FieldsetFormField,
  FieldsetFormTitle,
  FormBox,
  FormContainer,
  FormContent,
  FormControl,
  NoResult,
  ResumeCart,
} from './styled'
import { CartContext } from '../../contexts/CartContext'
import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import { Button } from '../../components/Button'
import { ResumeCoffeeCard } from '../../components/CoffeeCard/Resume'
import { priceFormatter } from '../../utils/formater'

export default function Cart() {
  const { totalInCart, cart, totalInCartPrice, total, deliveryPrice } =
    useContext(CartContext)

  return (
    <CartContainer className="container">
      {totalInCart <= 0 ? (
        <NoResult>
          <h2>Seu carrinho está vazio</h2>
        </NoResult>
      ) : (
        <>
          <FormContainer>
            <h2>Complete seu pedido</h2>
            <FormBox>
              <FormContent>
                <FieldsetFormTitle>
                  <MapPinLine size={22} color={defaultTheme['yellow-700']} />
                  <h1>
                    Endereço de Entrega
                    <span>
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </h1>
                </FieldsetFormTitle>

                <FieldsetFormBody>
                  <FieldsetFormField>
                    <FormControl>
                      <input type="text" placeholder="CEP" />
                    </FormControl>
                  </FieldsetFormField>

                  <FieldsetFormField>
                    <FormControl className="full">
                      <input type="text" placeholder="Rua" />
                    </FormControl>
                  </FieldsetFormField>

                  <FieldsetFormField>
                    <FormControl>
                      <input type="text" placeholder="Número" />
                    </FormControl>
                    <FormControl className="full">
                      <input type="text" placeholder="Complemento" />
                    </FormControl>
                  </FieldsetFormField>

                  <FieldsetFormField>
                    <FormControl>
                      <input type="text" placeholder="Bairro" />
                    </FormControl>
                    <FormControl className="full">
                      <input type="text" placeholder="Cidade" />
                    </FormControl>
                    <FormControl>
                      <input type="text" placeholder="UF" className="w60" />
                    </FormControl>
                  </FieldsetFormField>
                </FieldsetFormBody>
              </FormContent>
              <FormContent>
                <FieldsetFormTitle>
                  <CurrencyDollar
                    size={22}
                    color={defaultTheme['purple-700']}
                  />
                  <h1>
                    Pagamento
                    <span>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </h1>
                </FieldsetFormTitle>

                <FieldsetFormBody>
                  <FieldsetFormField>
                    <FormControl className="full">
                      <Button variant="secondary">
                        <CreditCard size={'20'} />
                        Cartão de Crédito
                      </Button>
                    </FormControl>
                    <FormControl className="full">
                      <Button variant="secondary">
                        <CreditCard size={'20'} />
                        Cartão de Débito
                      </Button>
                    </FormControl>
                    <FormControl className="full">
                      <Button variant="secondary">
                        <Money size={'20'} />
                        Dinheiro
                      </Button>
                    </FormControl>
                  </FieldsetFormField>
                </FieldsetFormBody>
              </FormContent>
            </FormBox>
          </FormContainer>

          <ResumeCart>
            <h2>Cafés selecionados</h2>
            <FormBox>
              <FormContent className="styled">
                <div>
                  {cart.map((item) => (
                    <ResumeCoffeeCard key={item.coffeeId} {...item} />
                  ))}
                </div>
                <div className="resume">
                  <span>Total de itens</span>
                  <span>R$ {priceFormatter.format(totalInCartPrice)}</span>
                </div>
                <div className="resume">
                  <span>Entrega</span>
                  <span>R$ {priceFormatter.format(deliveryPrice)}</span>
                </div>
                <div className="resume total">
                  <span>Total</span>
                  <span>R$ {priceFormatter.format(total)}</span>
                </div>
                <div className="btn-confirm">
                  <Button variant="">Confirmar Pedido</Button>
                </div>
              </FormContent>
            </FormBox>
          </ResumeCart>
        </>
      )}
    </CartContainer>
  )
}
