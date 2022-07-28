import { useState } from 'react'
import styled from 'styled-components'

type Pizza = { id: number; name: string; description: string }

let pizzas = [
  {
    id: 1,
    name: 'Cheese pizza',
    description: 'very cheesy',
  },
  {
    id: 2,
    name: 'Al Tono pizza',
    description: 'lots of tuna',
  },
]

function Pizza({ pizza }: { pizza: Pizza }) {
  const [data, setData] = useState(pizza)
  const [dirty, setDirty] = useState(false)

  const update = (value: string, fieldName: string) => {
    setData(p => ({ ...p, [fieldName]: value }))
    setDirty(true)
  }

  const onSave = () => {
    setDirty(false)
    // make rest call
  }

  return (
    <PizzaFrame>
      <h3>
        <Title
          onChange={evt => update(evt.target.value, 'name')}
          value={data.name}
        />
      </h3>
      <div>
        <Input
          onChange={evt => update(evt.target.value, 'description')}
          value={data.description}
        />
      </div>
      {dirty ? (
        <div>
          <Save onClick={onSave}>Save</Save>
        </div>
      ) : null}
    </PizzaFrame>
  )
}

export default function Main() {
  const data = pizzas.map(pizza => <Pizza pizza={pizza} />)

  return <>{data}</>
}

const PizzaFrame = styled.div`
  border: solid 1px gray;
  padding: 10px;
  margin: 15px 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px grey;
  font-family: Arial;
`

const Input = styled.input`
  border: solid 1px black;
  padding: 5px;
  border-radius: 3px;
`

const Title = styled(Input)`
  text-transform: uppercase;
`

const Save = styled.button`
  width: 100px;
  margin: 10px;
  background: green;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
`
