import { ChangeEvent, FC, useContext } from 'react'
import styled from 'styled-components'
import { FilterContext } from '../lib/FilterContext'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  max-width: 1280px;
  margin: 0 auto;
`
const LogoContainer = styled.div`
  /* height: 60px; */
  padding: 10px 1rem;
`

const Logo = styled.img`
  display: none;
  width: auto;
  height: 40px;

  @media (min-width: 768px) {
    & {
      display: block;
    }
  }
`

const LogoMini = styled.img`
  display: block;
  width: auto;
  height: 40px;

  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`

const SearchBar = styled.div`
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
`
const ProvinceSelect = styled.select``

const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  outline: none;
  border: none;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`

const Filter = styled.img`
  width: auto;
  height: 20px;
  margin-right: 1rem;

  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`

const Navbar: FC<any> = ({ filters }) => {
  const { state, dispatch } = useContext(FilterContext)
  const { provinces } = filters
  const handleProvince = (e: ChangeEvent<HTMLSelectElement>) => {
    const province = e.target.value
    dispatch({
      province
    })
  }
  return (
    <Container>
      <LogoContainer>
        <Logo
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/halfhalf-logo.png`}
        />
        <LogoMini
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/halfhalf-logo-mini.png`}
        />
      </LogoContainer>

      <SearchBar>
        <ProvinceSelect onChange={handleProvince} value={state.province}>
          <option value="พื้นที่ใกล้ฉัน">พื้นที่ใกล้ฉัน</option>
          <option value="สถานที่ทั้งหมด">สถานที่ทั้งหมด</option>
          {provinces.map((province) => (
            <option key={`navbar-${province}`} value={province}>{province}</option>
          ))}
        </ProvinceSelect>
        <SearchInput
          type="text"
          placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
          autoComplete="off"
          onChange={(e) => dispatch({ word: e.target.value })}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              dispatch({ search: state.word })
            }
          }}
          value={state.word}
        />
      </SearchBar>

      <div>
        <Filter
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/filter.png`}
        />
      </div>
    </Container>
  )
}

export default Navbar
