import React from "react"
import styled from "styled-components"

const PageFooter = styled.footer`
  text-align: center;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
  color: #fff;

  h5 {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
  }

  span,
  a {
    color: #645cff;
  }
`

const Footer = () => {
  return (
    <PageFooter>
      <p>
        &copy; {new Date().getFullYear()}
        <span>SimplyRecipes</span>. Built with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </PageFooter>
  )
}

export default Footer
