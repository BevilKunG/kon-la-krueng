import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const Logo = styled.img`
`

const Navbar: FC = () => {
  return (
    <Container>
      <Logo src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/halfhalf-logo.png`} />
    </Container>
  )
}

export default Navbar