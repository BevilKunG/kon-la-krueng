import { NextPage, GetStaticProps } from 'next'
import { Layout, Breadcrumb } from '../components'
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

interface IHomeProp {
  data: any
}

const Home: NextPage<IHomeProp> = ({ data }) => {
  const { merchants, ...filters } = data

  return (
  <Layout>
    <Breadcrumb />
    <Container>
      <Title>ผลการค้นหาทั้งหมด</Title>
      <Grid>
      </Grid>
    </Container>
  </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://panjs.com/ywc18.json')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default Home
