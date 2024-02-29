import React from 'react'

const LoaderCard = () => {
  return (
    <div className="container d-flex  flex-column align-items-center">
              <div className="card  col-lg-6  ">
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
            </div>
  )
}

export default LoaderCard