import { FC, useContext } from 'react'
import { FilterContext } from '../../lib/FilterContext'
import { CategoryFilter, SubcategoryFilter } from './'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  padding: 1rem;
`

const FilterCard: FC<any> = ({ filters }) => {
  const { state } = useContext(FilterContext)

  const { categories } = filters
  const subcategories = {}
  categories.forEach(
    ({ name, subcategories: value }) => (subcategories[name] = value)
  )

  return (
    <Container>
      <CategoryFilter {...{ categories: categories.map(({ name }) => name) }} />

      {state.category ? <SubcategoryFilter {...{ subcategories }} /> : null}
    </Container>
  )
}

export default FilterCard
