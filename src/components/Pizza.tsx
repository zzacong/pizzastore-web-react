import { useState } from 'react'
import styled from 'styled-components'
import type { TPizza } from './PizzaList'

export default function Pizza({ pizza }: { pizza: TPizza }) {
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

const PizzaFrame = styled.div`
  border: solid 1px gray;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 0 5px grey;
  width: 40rem;
`

const Input = styled.input`
  border: solid 1px black;
  padding: 5px;
  border-radius: 3px;
  width: 100%;
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
