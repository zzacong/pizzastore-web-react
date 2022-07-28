import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import Pizza from './Pizza'

const fetchData = () =>
  fetch('/api/pizzas').then(async resp => {
    const pizzas = ZPizzas.parse(await resp.json())
    return pizzas
  })

export default function PizzaList() {
  const { data: pizzas, isError, isLoading } = useQuery(['pizzas'], fetchData)

  return isError ? (
    <div>Error</div>
  ) : !isLoading && !pizzas?.length ? (
    <div>No pizzas</div>
  ) : (
    <div>
      {pizzas?.map(p => (
        <Pizza pizza={p} />
      ))}
    </div>
  )
}

const ZPizza = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
})

const ZPizzas = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
  })
)

export type TPizza = z.infer<typeof ZPizza>
