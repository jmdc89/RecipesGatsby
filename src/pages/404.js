import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const ErrorStyle = styled.main`
  min-height: calc(100vh - (6rem + 4rem));
  text-align: center;
  padding-top: 3rem;

  h1 {
    font-size: 9rem;
  }
`

const Error = () => {
  return (
    <Layout>
      <ErrorStyle>
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </ErrorStyle>
    </Layout>
  )
}

export default Error
