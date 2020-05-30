import { IHomeProps, defaultProps as props } from '@definitions/IHome';
import Layout from '@src/components/layout';
import React, { Component } from 'react';
import '@static/css/home.css';

export interface IVectorState {
  vectorResult: string;
}

class Vector extends Component<IHomeProps, IVectorState> {
  static defaultProps: IHomeProps = props;

  constructor(props: IHomeProps) {
    super(props);
  }

  vectorInput: HTMLInputElement = null;

  state: IVectorState = {
    vectorResult: '__________',
  };

  getVectorResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vectors = e.target.value;
    const replaceVectors = vectors.replace(/\(/g, '').replace(/\)/g, '');
    const splitVectors = replaceVectors.split(',');
    let xVectorResult = 0;
    let yVectorResult = 0;
    splitVectors.map((value, i) => {
      const numValue = parseFloat(value);
      if (isEven(i)) {
        xVectorResult = xVectorResult + numValue;
      } else {
        yVectorResult = yVectorResult + numValue;
      }
    });

    this.setState({ vectorResult: `(${xVectorResult}, ${yVectorResult})` });
  };

  render() {
    return (
      <Layout>
        <div>
          <div>
            <div className="fisic-text">
              <h1>Suma de Vectores</h1>
            </div>
            <div className="vector-container">
              <span style={{ fontSize: '2em' }}> Ingrese los vectores a sumar: </span>
              <input
                style={{ marginLeft: '15px' }}
                type="num"
                placeholder="(x, y),(x2,y2)"
                ref={(vectorInput: HTMLInputElement) => (this.vectorInput = vectorInput)}
                onBlur={this.getVectorResult}
              />
              <span style={{ fontSize: '2em' }}>
                {' '}
                Resultado: <span style={{ textDecoration: 'underline' }}>{this.state.vectorResult}</span>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

function isEven(n: number) {
  return n % 2 == 0;
}

export default Vector;
