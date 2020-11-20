import { FC, useContext } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #27397c;
  padding: 0.75rem 1rem;

  & a, span, p {
    color: white;
    padding: 0 0.4rem;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    & {
      padding: 0.75rem 2rem;
    }
  }
`

const SlashSymbol = styled.span`
  margin: 0 0.75px;
`

const ActiveLink = styled.span`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-weight: 600;
`

const Breadcrumb: FC = () => {
  return (
    <Container>
      <Link href="/">หน้าแรก</Link>
      <SlashSymbol>/</SlashSymbol>
      <ActiveLink>ค้นหา</ActiveLink>
    </Container>
  )
}

export default Breadcrumb