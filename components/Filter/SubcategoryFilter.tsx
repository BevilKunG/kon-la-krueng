import { FC, useContext, ChangeEvent } from 'react'
import { FilterContext } from '../../lib/FilterContext'
import styled from 'styled-components'

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

const SubcategoryFilter: FC<any> = ({ subcategories }) => {
  const { state, dispatch } = useContext(FilterContext)
  const handleSubcategory = (e: ChangeEvent<HTMLInputElement>) => {
    let subcategory = e.target.value !== 'all' ? e.target.value : null
    dispatch({
      subcategory,
    })
  }
  return (
    <div>
      <Title>ประเภท{state.category}</Title>
      <OptionRadio>
        <label>
          <input
            type="radio"
            name="subcategory"
            value="all"
            onChange={handleSubcategory}
            checked={!state.subcategory}
          />
          <RadioLabel>ทั้งหมด</RadioLabel>
        </label>

        {subcategories[state.category].map((subcategory) => (
          <label key={subcategory}>
            <input
              type="radio"
              name="subcategory"
              value={subcategory}
              onChange={handleSubcategory}
            />
            <RadioLabel>{subcategory}</RadioLabel>
          </label>
        ))}
      </OptionRadio>
    </div>
  )
}

export default SubcategoryFilter