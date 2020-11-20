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

const NotFound = styled.div`
  text-align: center;
  margin-top: 5rem;
`

const NotFoundTitle = styled.h1`
  font-family: 'IBM Plex Sans Thai Bold';
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.02rem;
`

const NotFoundSubtitle = styled.p`
  font-size: 1rem;
  letter-spacing: -0.02rem;
  margin-top: 1rem;
`



const MerchantList: FC<any> = ({ merchants }) => {
  return (
    <Container>
      {merchants.length !== 0 ? merchants.map((merchant) => (
        <MerchantCard key={`merchant-card-${merchant.shopNameTH}`} {...{ merchant }} />
      )) : (
        <NotFound>
          <NotFoundTitle>ไม่พบสถานที่ที่คุณกำลังหา</NotFoundTitle>
          <NotFoundSubtitle>ร้านค้าที่ท่านค้นหาอาจไม่ได้เข้าร่วมโครงการ คนละครึ่ง</NotFoundSubtitle>
        </NotFound>
      )}
    </Container>
  )
}

export default MerchantList
