import { FC, useContext, ChangeEvent } from 'react'
import { FilterContext } from '../../lib/FilterContext'
import styled from 'styled-components'
import { LocationOn } from '@styled-icons/material/LocationOn'

const Title = styled.h1`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-size: 16px;
  letter-spacing: -0.02em;
`

const Wrap = styled.div`
  position: relative;
`

const Select = styled.select`
  /* display: none; */
`

const ProvinceFilter: FC<any> = ({ provinces }) => {
  const { state, dispatch } = useContext(FilterContext)
  const handleProvince = (e: ChangeEvent<HTMLSelectElement>) => {
    const province = !['nearMe', 'all'].includes(e.target.value) ? e.target.value : null
    dispatch({
      province
    })
  }

  return (
    <div>
      <Title>จังหวัด/ใกล้ฉัน</Title>
      <Select onChange={handleProvince}>
        <option value="nearMe">พื้นที่ใกล้ฉัน</option>
        <option value="all">สถานที่ทั้งหมด</option>
        {provinces.map((province) => (
          <option value={province}>{province}</option>
        ))}
      </Select>
    </div>
  )
}

export default ProvinceFilter
