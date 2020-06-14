import React, { Fragment } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Draw from "./draw"

const MainSection = () => {
  const data = useStaticQuery(graphql`
    query MainSection {
      contentfulSectionContent {
        title
        description {
          description
        }
        buttonText
        image {
          fixed(width: 140, height: 76) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <div className="main-section">
        <div className="main-section-inner">
          <h1 className="main-section-inner-title">
            {data.contentfulSectionContent.title}
          </h1>
          <p className="main-section-inner-description">
            {data.contentfulSectionContent.description.description}
          </p>
          <Img
            className="main-section-inner-img"
            fixed={data.contentfulSectionContent.image.fixed}
          />
          <button className="main-section-inner-button">
            {data.contentfulSectionContent.buttonText}
          </button>
        </div>
        <Draw />
        <div className="d portion"></div>
      </div>
    </Fragment>
  )
}
export default MainSection
