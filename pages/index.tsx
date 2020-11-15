import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Title = styled.h1`
  font-family: 'IBM Plex Sans Thai';
  font-size: 24px;
`

const Home: FC = () => {
  return (
  <Container>
    <Title>สวัสดี</Title>
    <h1>สวัสดี</h1>
  </Container>
  )
}

export default Home
