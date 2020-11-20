import { FC } from 'react'
import { MerchantCard } from './'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 0.5rem;
  gap: 0.5rem;
`

const MerchantList: FC<any> = ({ merchants }) => {
  // console.log(merchants)
  return (
    <Container>
      {merchants.map((merchant) => (
        <MerchantCard key={merchant.shopNameTH} {...{ merchant }} />
      ))}
    </Container>
  )
}

export default MerchantList
