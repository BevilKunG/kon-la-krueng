import { FC } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`

const Home: FC = () => {
  return (
  <div>
    <Title>Hello World</Title>
  </div>
  )
}

export default Home
