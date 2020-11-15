import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
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