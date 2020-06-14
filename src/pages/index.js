import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import MainSection from "../components/mainSection/mainSection"
import PrinciplesSection from "../components/principlesSection/principlesSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MainSection />
      <PrinciplesSection />
    </Layout>
  )
}

export default IndexPage
