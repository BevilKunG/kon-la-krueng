import { NextPage, GetStaticProps } from 'next'
import { Navbar, Breadcrumb, Content } from '../components'
import { FilterProvider } from '../lib/FilterContext'
import { Data } from '../lib/types'

interface IIndexProp {
  data: Data
}

const IndexPage: NextPage<IIndexProp> = ({ data }) => {
  const { merchants, ...filters } = data
  return (
    <FilterProvider>
      <Navbar {...{ filters }} />
      <Breadcrumb />
      <Content {...{ data }} />
    </FilterProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://panjs.com/ywc18.json')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default IndexPage
