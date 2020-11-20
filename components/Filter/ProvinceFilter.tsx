import { FC, useContext, ChangeEvent } from 'react'
import { FilterContext } from '../../lib/FilterContext'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-size: 16px;
  letter-spacing: -0.02em;
`

const Select = styled.select`
  width: 100%;
`

const ProvinceFilter: FC<any> = ({ provinces }) => {
  const { state, dispatch } = useContext(FilterContext)
  const handleProvince = (e: ChangeEvent<HTMLSelectElement>) => {
    const province = e.target.value
    dispatch({
      province
    })
  }

  return (
    <div>
      <Title>จังหวัด/ใกล้ฉัน</Title>
      <Select onChange={handleProvince} value={state.province}>
        <option value="พื้นที่ใกล้ฉัน">พื้นที่ใกล้ฉัน</option>
        <option value="สถานที่ทั้งหมด">สถานที่ทั้งหมด</option>
        {provinces.map((province) => (
          <option key={`province-filter-${province}`} value={province}>{province}</option>
        ))}
      </Select>
    </div>
  )
}

export default ProvinceFilter
