import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 0.5rem;
  gap: 0.5rem;
`

const Card = styled.div`
  background-color: white;
  border: 1px solid #c9e1e9;

  @media (min-width: 1024px) {
    display: flex;
  }
`

const Image = styled.div<any>`
  width: 100%;
  min-height: 14rem;
  background-color: #ececec;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (min-width: 1024px) {
    & {
      max-width: 20rem;
    }
  }
`

const Detail = styled.div`
  flex: 1;
  padding: 1rem;
`

const MerchantCard: FC<any> = ({ merchant }) => {
  const { coverImageId } = merchant
  return (
    <Card>
      <Image src={coverImageId} />

      <Detail></Detail>
    </Card>
  )
}

const MerchantList: FC<any> = ({ merchants }) => {
  console.log(merchants)
  return (
    <Container>
      {merchants.map((merchant) => (
        <MerchantCard {...{ merchant }} />
      ))}
    </Container>
  )
}

export default MerchantList
