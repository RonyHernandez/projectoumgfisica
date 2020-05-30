import React from 'react';

export function Footer() {
  return (
    <div className="fproject">
      <div className="container">
        <div className="row">
          <div className="col xs-2 sm-2 md-4 lg-4 xl-4 fproject__side">
            <div className="fproject__info">
              <p>Projecto - Fisica 1 </p>
              <ul>
                <li>
                  <a href={`/alumno/`}>Informacion del Alumno</a>
                </li>
                <li>
                  <a href={`/conversiones/`}>Conversiones</a>
                </li>
                <li>
                  <a href={`/newton/`}>Segunda ley de newton</a>
                </li>
                <li>
                  <a href={`/vectores/`}>Suma de Vectores</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col xs-2 sm-2 md-2 lg-4 xl-4">
            <div className="fproject__info"></div>
          </div>
          <div className="col xs-4 sm-2 md-2 lg-4 xl-4">
            <div className="fproject__info fproject__last"></div>
          </div>
        </div>
      </div>

      <svg style={{ opacity: 0, display: 'block', width: 0, height: 0 }} xmlns="http://www.w3.org/2000/svg">
        <symbol id="search-icon" viewBox="0 0 18.225 18.225">
          <path
            d="M22.65,24.225l1.575-1.575L19.05,17.475H18.2l-.275-.3a6.182,6.182,0,0,0,1.188-2.012,6.949,6.949,0,0,0,.413-2.388,6.722,6.722,0,0,0-.887-3.4A6.677,6.677,0,0,0,12.8,6,6.764,6.764,0,0,0,6.912,9.363a6.74,6.74,0,0,0,2.475,9.262,6.718,6.718,0,0,0,3.413.9,6.877,6.877,0,0,0,2.363-.413,6.182,6.182,0,0,0,2.012-1.187h0l.3.275v.825Zm-9.85-6.75a4.524,4.524,0,0,1-2.35-.638,4.817,4.817,0,0,1-1.712-1.712,4.65,4.65,0,0,1,0-4.7,4.717,4.717,0,0,1,1.712-1.7,4.687,4.687,0,0,1,6.4,6.4,4.717,4.717,0,0,1-1.7,1.712A4.524,4.524,0,0,1,12.8,17.475Z"
            transform="translate(-6 -6)"
            fill="#fff"
          />
        </symbol>
      </svg>
    </div>
  );
}

export default React.memo(Footer);
