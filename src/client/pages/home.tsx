import { IHomeProps, defaultProps as props } from '@definitions/IHome';
import Layout from '@src/components/layout';
import React, { Component } from 'react';
import '@static/css/home.css';

class Home extends Component<IHomeProps> {
  static defaultProps: IHomeProps = props;

  constructor(props: IHomeProps) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div>
          <div>
            <div className="fisic-text">
              <h1> Bienvenidos al projecto de Fisica</h1>
            </div>
            <div className="ats-mainsearch">
              <a href="/conversiones/">
                <img className="icons-fisic" src="/public/img/mesure-icon.png" title="Conversiones" />
              </a>
              <a href="/vectores/">
                <img className="icons-fisic" src="/public/img/sigma_math.png" title="Suma de vectores" />
              </a>
              <a href="/newton/">
                <img className="icons-fisic" src="/public/img/fma.jpg" title="Segunda ley de newton" />
              </a>
              <a href="/alumno/">
                <img className="icons-fisic" src="/public/img/student.png" title="Informacion del alumno" />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
