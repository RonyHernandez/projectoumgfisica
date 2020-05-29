import { IHomeProps, defaultProps as props } from '@definitions/IHome';
import Layout from '@src/components/layout';
import { IPlainObject } from '@src/definitions/IPlainObject';
import lengthUnits, { IMeasure } from '@src/services/lenght';
import timeUnits from '@src/services/time';
import weightUnits from '@src/services/weight';
import React, { PureComponent } from 'react';
import '@static/css/home.css';

export declare interface IHomeState {
  newLenghtUnit: IMeasure[];
  newWeightUnit: IMeasure[];
  newTimeUnit: IMeasure[];
  newLenghtValue: number;
}
export default class Conversion extends PureComponent<IHomeProps, IHomeState> {
  static defaultProps: IHomeProps = props;

  constructor(props: IHomeProps) {
    super(props);
  }

  state: IHomeState = {
    newLenghtUnit: [],
    newWeightUnit: [],
    newTimeUnit: [],
    newLenghtValue: 0,
  };

  lengthSelect: HTMLSelectElement = null;

  lengthTwoSelect: HTMLSelectElement = null;

  getUnitValues(measureUnit: IMeasure[]) {
    const items: IPlainObject = [];
    measureUnit.map((measure, i) => {
      items.push(
        <option key={i} value={measure.key}>
          {` ${measure.measure} (${measure.key})`}
        </option>,
      );
    });
    return items;
  }

  changeLenghtUnit = (event: IPlainObject) => {
    let filteredMeasure = [];
    filteredMeasure = lengthUnits.filter((m: IMeasure) => {
      return m.key !== event.target.value;
    });
    console.log(filteredMeasure);
    this.setState({ newLenghtUnit: filteredMeasure });
  };

  changeWeightUnit = (event: IPlainObject) => {
    let filteredMeasure = [];
    filteredMeasure = weightUnits.filter((m: IMeasure) => {
      return m.key !== event.target.value;
    });
    console.log(filteredMeasure);
    this.setState({ newWeightUnit: filteredMeasure });
  };

  changeTimeUnit = (event: IPlainObject) => {
    let filteredMeasure = [];
    filteredMeasure = timeUnits.filter((m: IMeasure) => {
      return m.key !== event.target.value;
    });
    console.log(filteredMeasure);
    this.setState({ newTimeUnit: filteredMeasure });
  };

  handleLenghtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    this.setState({ newLenghtValue: value / 10 });
  };

  render() {
    return (
      <Layout>
        <div>
          <div>
            <div className="fisic-text">
              <h1> Conversiones</h1>
            </div>
            <div className="measure-type">
              <h2> Longitud </h2>
              <div className="measure-select">
                <input type="num" inputMode="decimal" placeholder="0" onChangeCapture={this.handleLenghtChange} />
                <select
                  required
                  ref={(lengthSelect: HTMLSelectElement) => (this.lengthSelect = lengthSelect)}
                  onChange={this.changeLenghtUnit}
                  name="longitudA"
                >
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(lengthUnits)}
                </select>
              </div>
              <h3>A:</h3>
              <div className="measure-select">
                <input type="text" value={this.state.newLenghtValue} />
                <select
                  required
                  name="longitudB"
                  ref={(lengthTwoSelect: HTMLSelectElement) => (this.lengthTwoSelect = lengthTwoSelect)}
                >
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(this.state.newLenghtUnit)}
                </select>
              </div>
            </div>
            <div className="measure-type">
              <h2> Peso </h2>
              <div className="measure-select">
                <input type="text" />
                <select onChange={this.changeWeightUnit} name="pesoA">
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(weightUnits)}
                </select>
              </div>
              <h3>A:</h3>
              <div className="measure-select">
                <input type="text" />
                <select name="pesoB">
                  {' '}
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(this.state.newWeightUnit)}
                </select>
              </div>
            </div>
            <div className="measure-type">
              <h2> Tiempo </h2>
              <div className="measure-select">
                <input type="text" />
                <select name="tiempoA" onChange={this.changeTimeUnit}>
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(timeUnits)}
                </select>
              </div>
              <h3>A:</h3>
              <div className="measure-select">
                <input type="text" />
                <select name="tiempoB">
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(this.state.newTimeUnit)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
