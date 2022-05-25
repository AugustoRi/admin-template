import type { NextPage } from 'next'
import { Layout } from '../components/template/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Hello" subtitle="subtitle">
      <h3>Content</h3>
    </Layout>
  )
}

export default Home
