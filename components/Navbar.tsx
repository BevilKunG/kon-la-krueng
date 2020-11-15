import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Logo = styled.img`
`

const Navbar: FC = () => {
  return (
    <Container>
      <Logo src="/images/halfhalf-logo.png" />
    </Container>
  )
}

export default Navbar