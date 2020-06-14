import React, { Fragment } from "react"
import { Link } from "gatsby"

//assets
import Smart from "../../images/smart.png"
import Natural from "../../images/natural.png"
import Use from "../../images/use.png"

const PrinciplesSection = () => {
  return (
    <Fragment>
      <div className="section">
        <div className="section-container">
          <div className="section-container-title">
            <h2 className="title">Los 3 Principios</h2>
          </div>
          <div className="section-container-cards">
            <div className="card">
              <div className="card-inner">
                <div className="container-img smart">
                  <img className="img" src={Smart} />
                </div>
                <div className="description">
                  <p>Diseña productos inteligentes</p>
                </div>
                <div className="container-button">
                  <Link className="link" to="/">
                    Más información
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <div className="container-img">
                  <img className="img" src={Use} />
                </div>
                <div className="description">
                  <p>Mantén productos en uso</p>
                </div>
                <div className="container-button">
                  <Link className="link" to="/">
                    Más información
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <div className="container-img">
                  <img className="img" src={Natural} />
                </div>
                <div className="description">
                  <p>Regenera el sistema natural</p>
                </div>
                <div className="container-button">
                  <Link className="link" to="/">
                    Más información
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PrinciplesSection
