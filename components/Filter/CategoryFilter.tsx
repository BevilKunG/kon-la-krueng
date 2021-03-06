import { FC, useContext, ChangeEvent } from 'react'
import { FilterContext } from '../../lib/FilterContext'
import styled from 'styled-components'
import { Data } from '../../lib/types'

const Title = styled.h1`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-size: 16px;
  letter-spacing: -0.02em;
`

const OptionRadio = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`

const RadioLabel = styled.span`
  padding: 0 8px;
  font-size: 14px;
`

interface ICategoryFilterProp {
  categories: string[]
}

const CategoryFilter: FC<ICategoryFilterProp> = ({ categories }) => {
  const { state, dispatch } = useContext(FilterContext)
  const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    let category = e.target.value !== 'all' ? e.target.value : null
    dispatch({
      category,
      subcategory: null,
    })
  }

  return (
    <div>
      <Title>ประเภทร้านค้า</Title>
      <OptionRadio>
        <label>
          <input
            type="radio"
            name="category"
            value="all"
            onChange={handleCategory}
            checked={!state.category}
          />
          <RadioLabel>ทั้งหมด</RadioLabel>
        </label>

        {categories.map((category) => (
          <label key={`category-filter-${category}`}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleCategory}
            />
            <RadioLabel>{category}</RadioLabel>
          </label>
        ))}
      </OptionRadio>
    </div>
  )
}

export default CategoryFilter