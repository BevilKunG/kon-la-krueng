import { FC, useContext } from 'react'
import { FilterContext } from '../lib/FilterContext'
import { FilterCard } from './Filter'
import MerchantList from './MerchantList'
import styled from 'styled-components'

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

const Content: FC<any> = ({ data }) => {
  const { merchants, ...filters } = data
  const { state } = useContext(FilterContext)
  const { category } = state

  const { categories } = filters
  const subcategories = {}
  categories.forEach(
    ({ name, subcategories: value }) => (subcategories[name] = value)
  )

  const filterMerchant = (merchants, filters) => {
    let filtered = merchants
    if (filters.category) {
      filtered = filtered.filter((merchant) => subcategories[filters.category].includes(merchant.subcategoryName))
    }

    if (filters.subcategory) {
      filtered = filtered.filter((merchant) => merchant.subcategoryName === filters.subcategory)
    }

    return filtered
  }

  const filteredMerchants = filterMerchant(merchants, state)
  return (
    <Container>
      <Title>ผลการค้นหา{!category ? ' ' : ` ${category} `}ทั้งหมด</Title>
      <Flex>
        <FilterCard {...{ filters }} />
        <MerchantList {...{ merchants }} />
      </Flex>
    </Container>
  )
}

export default Content
