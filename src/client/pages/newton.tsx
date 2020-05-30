import { IHomeProps, defaultProps as props } from '@definitions/IHome';
import Layout from '@src/components/layout';
import React, { Component } from 'react';
import '@static/css/home.css';

export interface INewtonState {
  resultValue: string;
}

class Newton extends Component<IHomeProps, INewtonState> {
  static defaultProps: IHomeProps = props;

  constructor(props: IHomeProps) {
    super(props);
  }

  forceInput: HTMLInputElement = null;

  massInput: HTMLInputElement = null;

  accInput: HTMLInputElement = null;

  isForceMissing = false;

  isMassMissing = false;

  isAccMissing = false;

  forceVal: number;

  massVal: number;

  accVal: number;

  state: INewtonState = {
    resultValue: '',
  };

  resetValues = () => {
    this.isForceMissing = false;

    this.isMassMissing = false;

    this.isAccMissing = false;
  };

  checkInfo = () => {
    this.resetValues();
    console.log('click');
    if (parseFloat(this.forceInput.value)) {
      this.forceVal = parseFloat(this.forceInput.value);
    } else {
      this.isForceMissing = true;
    }

    if (parseFloat(this.massInput.value)) {
      this.massVal = parseFloat(this.massInput.value);
    } else {
      this.isMassMissing = true;
    }

    if (parseFloat(this.accInput.value)) {
      this.accVal = parseFloat(this.accInput.value);
    } else {
      this.isAccMissing = true;
    }

    if (this.isForceMissing == true) {
      console.log('isForceMissing');
      const result = getforce(this.accVal, this.massVal);
      this.setState({ resultValue: `Fuerza es igual a:  ${result}` });
    }

    if (this.isMassMissing == true) {
      console.log('isMassMissing');
      const result = getMass(this.forceVal, this.accVal);
      this.setState({ resultValue: `Masa es igual a: ${result}` });
    }

    if (this.isAccMissing == true) {
      console.log('isAccMissing');
      const result = getAccel(this.forceVal, this.massVal);
      this.setState({ resultValue: `Aceleracion es igual a: ${result}` });
    }
  };

  render() {
    return (
      <Layout>
        <div>
          <div>
            <div className="fisic-text">
              <h1> Segunda Ley de Newton</h1>
              <h2 style={{ marginLeft: '100px', marginRight: '100px' }}>
                establece que las aceleraciones que experimenta un cuerpo son proporcionales a las fuerzas que recibe.
                Probablemente su forma más célebre es: F=m⋅a
              </h2>
            </div>
            <div
              style={{
                marginLeft: '300px',
                marginBottom: '350px',
                backgroundColor: 'yellow',
                marginRight: '250px',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}
            >
              <div>
                <span style={{ marginLeft: '100px', marginRight: '50px', fontSize: '2em' }}>Fuerza: </span>
                <input
                  style={{ fontSize: '1em' }}
                  type="num"
                  inputMode="decimal"
                  ref={(forceInput: HTMLInputElement) => (this.forceInput = forceInput)}
                />
              </div>
              <div>
                <span style={{ marginLeft: '120px', marginRight: '50px', fontSize: '2em' }}>Masa: </span>
                <input
                  style={{ fontSize: '1em' }}
                  type="num"
                  inputMode="decimal"
                  ref={(massInput: HTMLInputElement) => (this.massInput = massInput)}
                />
              </div>
              <div>
                <span style={{ marginLeft: '30px', marginRight: '50px', fontSize: '2em' }}>Aceleracion: </span>
                <input
                  style={{ fontSize: '1em' }}
                  type="num"
                  inputMode="decimal"
                  ref={(accInput: HTMLInputElement) => (this.accInput = accInput)}
                />
              </div>
              <br></br>
              <span style={{ marginLeft: '30px', marginRight: '50px', fontSize: '2em' }}>{this.state.resultValue}</span>
              <input
                style={{ marginLeft: '600px', marginRight: '0px', fontSize: '2em' }}
                type="button"
                value="Verificar"
                onClick={this.checkInfo}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

function getforce(mass: number, accel: number) {
  return mass * accel;
}

function getMass(force: number, accel: number) {
  return force / accel;
}

function getAccel(force: number, mass: number) {
  return force / mass;
}

export default Newton;
