import {
  ConceptualContainer,
  ConceptualContent,
  Container,
  ListConent,
  ListContainer,
} from './styled'
import Coffee from '../../assets/coffee.png'
import { ShoppingCart } from '@phosphor-icons/react'
import { CoffeeCard } from '../../components/CoffeeCard'

const coffees = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: '/assets/images/expresso_tradicional.png',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: '/assets/images/expresso_tradicional.png',
    price: 10.5,
    tags: ['tradicional'],
  },
]

export default function Home() {
  return (
    <Container>
      <ConceptualContainer>
        <ConceptualContent className="container">
          <div className="caption">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <ul>
              <li>
                <span>
                  <ShoppingCart size={16} color="white" weight="fill" />
                </span>
                Compra simples e segura
              </li>
              <li>
                <span className="v1">
                  <ShoppingCart size={16} color="white" weight="fill" />
                </span>
                Embalagem mantém o café intactot
              </li>
              <li>
                <span className="v2">
                  <ShoppingCart size={16} color="white" weight="fill" />
                </span>
                Entrega rápida e rastreada
              </li>
              <li>
                <span className="v3">
                  <ShoppingCart size={16} color="white" weight="fill" />
                </span>
                O café chega fresquinho até você
              </li>
            </ul>
          </div>
          <div>
            <img src={Coffee} alt="Coffee Shop" />
          </div>
        </ConceptualContent>
      </ConceptualContainer>

      <ListContainer className="container">
        <h2>Nossos Cafés</h2>
        <ListConent>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </ListConent>
      </ListContainer>
    </Container>
  )
}
