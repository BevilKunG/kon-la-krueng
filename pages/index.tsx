import { FC } from 'react'
import { Layout, Breadcrumb, FilterCard } from '../components'
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

const Home: FC = () => {
  return (
  <Layout>
    <Breadcrumb />
    <Container>
      <Title>ผลการค้นหาทั้งหมด</Title>
      <Grid>
        <FilterCard />
      </Grid>
    </Container>
  </Layout>
  )
}

export default Home
