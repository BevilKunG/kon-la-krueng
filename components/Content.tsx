import { FC, useContext } from 'react'
import { FilterContext } from '../lib/FilterContext'
import { FilterCard, FilterSide } from './Filter'
import { MerchantList } from './Merchant'
import styled from 'styled-components'
import { Data } from '../lib/types'

const Container = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    & {
      padding: 2rem 1rem;
    }
  }
`

const Title = styled.h1`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-size: 20px;
  letter-spacing: -0.02em;
  margin: 2rem 0;
`

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
`

interface IContentProp {
  data: Data
}

const Content: FC<IContentProp> = ({ data }) => {
  const { merchants, ...filters } = data
  const { state } = useContext(FilterContext)
  const { category, search } = state

  const { categories } = filters
  const subcategories = {}
  categories.forEach(
    ({ name, subcategories: value }) => (subcategories[name] = value)
  )

  const filteredMerchants = merchants.filter((merchant) => {
    const categoryFilter = state.category
      ? subcategories[state.category].includes(merchant.subcategoryName)
      : true

    const subcategoryFilter = state.subcategory
      ? merchant.subcategoryName === state.subcategory
      : true

    const provinceFilter =
      state.province &&
      !['พื้นที่ใกล้ฉัน', 'สถานที่ทั้งหมด'].includes(state.province)
        ? merchant.addressProvinceName === state.province
        : true

    const priceRangeFilter = state.priceLevel
      ? merchant.priceLevel === state.priceLevel
      : true

    const check = (value) => {
      return value.toString().toLowerCase().includes(state.search.toLowerCase())
    }

    const {
      shopNameTH,
      categoryName,
      subcategoryName,
      facilities,
      highlightText,
      recommendedItems,
      addressProvinceName,
      addressDistrictName,
    } = merchant
    const searchFilter = state.search
      ? check(shopNameTH) ||
        check(categoryName) ||
        check(subcategoryName) ||
        check(facilities) ||
        check(highlightText) ||
        check(recommendedItems) ||
        check(addressProvinceName) ||
        check(addressDistrictName)
      : true

    return (
      categoryFilter &&
      subcategoryFilter &&
      provinceFilter &&
      priceRangeFilter &&
      searchFilter
    )
  })

  console.log(filteredMerchants)
  return (
    <Container>
      <Title>{`ผลการค้นหา ${category ? category : ''} ${
        category && search ? ' , ' : ''
      }  ${search ? search : ''} ทั้งหมด`}</Title>
      <Flex>
        <FilterCard {...{ filters }} />
        <MerchantList {...{ merchants: filteredMerchants }} />
      </Flex>

      <FilterSide {...{ filters }} />
    </Container>
  )
}

export default Content
