import { FC, useContext, ChangeEvent } from 'react'
import { FilterContext } from '../../lib/FilterContext'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-size: 16px;
  letter-spacing: -0.02em;
`

const Select = styled.select`
`

const PriceRangeFilter: FC<any> = ({ priceRange }) => {
  const { dispatch } = useContext(FilterContext)
  const handleProvince = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value !== 'all' ? e.target.value : null
    const priceLevel = parseInt(value) !== NaN ? parseInt(value) : null
    dispatch({
      priceLevel
    })
  }

  return (
    <div>
      <Title>ราคา</Title>
      <Select onChange={handleProvince}>
        <option disabled>กรุณาเลือก</option>
        <option value="all">ทั้งหมด</option>
        {priceRange.map((range, index) => (
          <option value={index + 1}>{range}</option>
        ))}
      </Select>
    </div>
  )
}

export default PriceRangeFilter
