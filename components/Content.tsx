import { FC, useContext } from 'react'
import { FilterContext } from '../lib/FilterContext'
import { FilterCard } from './Filter'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 1rem;
`

const Title = styled.h1`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-size: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 2rem;
`

const Content: FC<any> = ({ data }) => {
  const { merchants, ...filters } = data
  const { state } = useContext(FilterContext)
  const { category } = state
  console.log(merchants, filters)
  return (
    <Container>
      <Title>ผลการค้นหา{!category ? ' ' : ` ${category} `}ทั้งหมด</Title>
      <Grid>
        <FilterCard {...{ filters }} />
      </Grid>
    </Container>
  )
}

export default Content
