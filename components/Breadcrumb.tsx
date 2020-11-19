import { FC, useContext } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #27397c;
  padding: 0.625rem 6.5rem;

  & a, span, p {
    color: white;
    padding: 0 0.4rem;
    font-size: 14px;
  }
`


const Breadcrumb: FC = () => {
  return (
    <Container>
      <Link href="/">หน้าแรก</Link>
      <span>/</span>
      <span>ค้นหา</span>
    </Container>
  )
}

export default Breadcrumb