import { FC, useContext } from 'react'
import {
  CategoryFilter,
  ProvinceFilter,
  PriceRangeFilter,
  SubcategoryFilter,
} from './'
import { FilterContext } from '../../lib/FilterContext'
import styled, { keyframes } from 'styled-components'
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft'

const slideAnimation = keyframes`
  100% {
    left: 0;
  }
`

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  /* animation-name: ${slideAnimation}; */
  animation-duration: 1s;
`

const Header = styled.div`
  width: 100%;
  color: white;
  /* font-size: 1.5rem; */
  height: 4rem;
  background-color: #2a4365;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 24px;
`

const Back = styled(KeyboardArrowLeft)`
  position: absolute;
  left: 0;
  top: auto;
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  cursor: pointer;
`

const FilterContainer = styled.div`
  padding: calc(24px + 1rem);
`

const FilterSide: FC<any> = ({ filters }) => {
  const { state, dispatch } = useContext(FilterContext)
  const { categories, provinces, priceRange } = filters
  const subcategories = {}
  categories.forEach(
    ({ name, subcategories: value }) => (subcategories[name] = value)
  )
  return state.sideShow ? (
    <Container>
      <Header>
        <Title>กรอกผล</Title>
        <Back
          onClick={() => {
            dispatch({
              sideShow: false,
            })
          }}
        ></Back>
      </Header>

      <FilterContainer>
        <CategoryFilter
          {...{ categories: categories.map(({ name }) => name) }}
        />

        <ProvinceFilter {...{ provinces }} />

        <PriceRangeFilter {...{ priceRange }} />

        {state.category ? <SubcategoryFilter {...{ subcategories }} /> : null}
      </FilterContainer>
    </Container>
  ) : null
}

export default FilterSide
