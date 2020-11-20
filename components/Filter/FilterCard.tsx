import { FC, useContext } from 'react'
import { FilterContext } from '../../lib/FilterContext'
import { CategoryFilter, SubcategoryFilter, ProvinceFilter, PriceRangeFilter } from './'
import styled from 'styled-components'

const Container = styled.div`
  display: none;
  width: 22rem;
  background-color: white;
  padding: 1rem;
  border: 1px solid #a0aec0;

  @media (min-width: 768px) {
    & {
      display: block;
      margin-right: 2rem;
    }
  }
`

const FilterCard: FC<any> = ({ filters }) => {
  const { state } = useContext(FilterContext)

  const { categories, provinces, priceRange } = filters
  const subcategories = {}
  categories.forEach(
    ({ name, subcategories: value }) => (subcategories[name] = value)
  )

  return (
    <Container>
      <CategoryFilter {...{ categories: categories.map(({ name }) => name) }} />

      <ProvinceFilter {...{ provinces }} />

      <PriceRangeFilter {...{ priceRange }} />

      {state.category ? <SubcategoryFilter {...{ subcategories }} /> : null}
    </Container>
  )
}

export default FilterCard
