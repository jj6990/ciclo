import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import React, { useState, Fragment } from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query navContent {
      file(relativePath: { eq: "ciclo-logo.png" }) {
        childImageSharp {
          fixed(width: 80, height: 76) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      allContentfulNavMenu {
        edges {
          node {
            tNav
            url
            icon
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Helmet>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <header className="header">
        <div className="brand-cont">
          <Link to="/">
            <Img className="logo-img" fixed={data.file.childImageSharp.fixed} />
          </Link>
          <h1 className="site-title">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </Link>
        </div>
        <div className="menu-cont">
          {data.allContentfulNavMenu.edges.map((edge, key) => (
            <Link key={key} className="item" to={edge.node.url}>
              <div className={edge.node.icon}></div>
              {edge.node.tNav}
            </Link>
          ))}
        </div>
        <Dropdown>
          <div className="dropdown">
            {data.allContentfulNavMenu.edges.map((edge, key) => (
              <Link key={key} className="item" to={edge.node.url}>
                <div className={edge.node.icon}></div>
                {edge.node.tNav}
              </Link>
            ))}
          </div>
        </Dropdown>
      </header>
    </Fragment>
  )
}

const Dropdown = props => {
  const [open, setOpen] = useState(false)
  return (
    <div className="cont-nav" onClick={() => setOpen(!open)}>
      <FontAwesomeIcon icon={faBars} />
      {open && props.children}
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
