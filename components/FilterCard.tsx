import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 0 solid #e2e8f0;
  background-color: white;
`
const FilterCard: FC = () => {
  return (
    <Container>
      <h1>ประเภทร้านค้า</h1>
      <input type="radio" name="category" id="all" />
      <label htmlFor="all">ทั้งหมด</label>
    </Container>
  )
}

export default FilterCard