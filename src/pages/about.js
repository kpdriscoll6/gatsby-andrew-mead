import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I am a person</p>
      <p>Need a developer? </p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default AboutPage
