import { FC, useContext, ChangeEvent } from 'react'
import { FilterContext } from '../../lib/FilterContext'
import styled from 'styled-components'
import { Range } from '../../lib/types'

const Title = styled.h1`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-size: 16px;
  letter-spacing: -0.02em;
`

const Select = styled.select`
  width: 100%;
`

interface IPriceRangeFilterProp {
  priceRange: Range[]
}

const PriceRangeFilter: FC<IPriceRangeFilterProp> = ({ priceRange }) => {
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
          <option key={`price-range-filter-${range}`} value={index + 1}>{range}</option>
        ))}
      </Select>
    </div>
  )
}

export default PriceRangeFilter
