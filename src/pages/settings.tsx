import type { NextPage } from 'next'

import { Layout } from '../components/template/Layout'

import { useAppData } from '../data/hooks/UseAppData'

const Settings: NextPage = () => {
  const { toggleTheme } = useAppData();

  return (
    <Layout title="Title for settings page" subtitle="subtitle">
    </Layout>
  )
}

export default Settings
