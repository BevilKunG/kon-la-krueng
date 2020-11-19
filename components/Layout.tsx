import { FC } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Container = styled.div``

interface ILayOutProp {
  children: any
}

const Layout: FC<ILayOutProp> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

export default Layout
