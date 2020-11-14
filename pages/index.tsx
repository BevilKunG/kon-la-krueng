import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`

const Home: FC = () => {
  return (
  <Container>
    <Title>Hello World</Title>
  </Container>
  )
}

export default Home
