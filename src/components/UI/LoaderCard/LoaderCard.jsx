import React from 'react'
import { ContainerStyled } from '../../Turnos/TurnosStyles'

const LoaderCard = () => {
  return (
    <ContainerStyled>
              <div className="card  col-sm-10  col-md-8 col-lg-5 col-10  ">
                <div className="card-header d-flex gap-5 placeholder-glow">
                  <span className="placeholder col-6"></span>
                </div>
                <div className="card-body placeholder-glow">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="placeholder col-7"></span>
                    </li>
                    <li className="list-group-item">
                      <span className="placeholder col-7"></span>
                    </li>
                    <li className="list-group-item">
                      <span className="placeholder col-7"></span>
                    </li>
                  </ul>
                </div>
              </div>
              </ContainerStyled>      
  )
}

export default LoaderCard



{/* <div className="container d-flex  flex-column align-items-center">
 */}