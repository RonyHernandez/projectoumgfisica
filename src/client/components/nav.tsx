import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="ats-nav">
      <div className="ats-nav__container">
        <div className="container">
          <div className="row">
            <div className="col">
              <input type="checkbox" aria-label="Hamburguer Menu" />
              <div className="ats-nav__main">
                <h3 style={{ color: '#ffffff' }}>Fisica 1 - A</h3>
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="ats-nav__menu" role="navigation">
                <div className="ats-nav__menu__wrapper">
                  <ul className="menu">
                    <li>
                      <Link to={`/`} title="Menu">
                        Menu
                      </Link>
                      <ul>
                        <li>
                          <Link to={`/`}>Informacion del Alumno</Link>
                        </li>
                        <li>
                          <Link to={`/`}>Conversiones</Link>
                        </li>
                        <li>
                          <Link to={`/`}>Segunda Ley de Newton</Link>
                        </li>
                        <li>
                          <Link to={`/`}>Suma de Vectores</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
