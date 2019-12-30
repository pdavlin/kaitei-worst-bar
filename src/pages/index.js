import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="The Worst Bar in Benson" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      <h2>This [awful] website is under construction!</h2>
      <p>Here are some things that you should eventually see:</p>
      <ul>
        <li>a menu</li>
        <li>directions to this nightmare dimension</li>
        <li>some pictures of the bar</li>
        <li>some pictures of drinks</li>
        <li>instagram??</li>
      </ul>
    </Layout>
)

export default IndexPage
