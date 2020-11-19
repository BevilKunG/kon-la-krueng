import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
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

const SearchInput = styled.input`

`

const Filter = styled.img`
  width: auto;
  height: 20px;

  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`

const Navbar: FC<any> = ({ filters }) => {
  console.log(filters)
  return (
    <Container>
      <div>
        <Logo src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/halfhalf-logo.png`} />
        <LogoMini src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/halfhalf-logo-mini.png`} />
      </div>

      <div>
        <SearchInput type="text" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" />
      </div>

      <div>
        <Filter src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/filter.png`} />
      </div>
    </Container>
  )
}

export default Navbar