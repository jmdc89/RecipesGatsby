import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import logo from "../assets/images/logo.svg"
import styled from "styled-components"

const NavbarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 992px) {
    height: 6rem;
  }
`

const NavCenter = styled.div`
  width: 90vw;
  max-width: 1120px;

  @media screen and (min-width: 992px) {
    display: flex;
    align-items: center;
  }
`

const NavHeader = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 200px;
    margin-left: -6px;
    margin-bottom: -9px;
  }

  @media screen and (min-width: 992px) {
    padding: 0;
    margin-right: 2rem;
    height: auto;
  }
`

const Button = styled.button`
  cursor: pointer;
  appearance: none;
  color: white;
  background: #645cff;
  border: none;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;
  padding: 0.15rem 0.75rem;

  svg {
    font-size: 1.5rem;
  }

  :hover {
    color: white;
    background: #4640b3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <NavbarStyle>
      <NavCenter>
        <NavHeader>
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </NavHeader>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </NavCenter>
    </NavbarStyle>
  )
}

export default Navbar
