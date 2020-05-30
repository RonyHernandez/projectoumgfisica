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
  newWeightValue: number;
  newTimeValue: number;
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
    newLenghtValue: null,
    newWeightValue: null,
    newTimeValue: null,
  };

  lengthSelect: HTMLSelectElement = null;

  lengthTwoSelect: HTMLSelectElement = null;

  lenghtInput: HTMLInputElement = null;

  lenghtInputTwo: HTMLInputElement = null;

  weightSelect: HTMLSelectElement = null;

  weightTwoSelect: HTMLSelectElement = null;

  weightInput: HTMLInputElement = null;

  weightInputTwo: HTMLInputElement = null;

  timeSelect: HTMLSelectElement = null;

  timeTwoSelect: HTMLSelectElement = null;

  timeInput: HTMLInputElement = null;

  timeInputTwo: HTMLInputElement = null;

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
    this.lenghtInput.value = '';
    this.setState({ newLenghtUnit: filteredMeasure, newLenghtValue: 0 });
  };

  changeWeightUnit = (event: IPlainObject) => {
    let filteredMeasure = [];
    filteredMeasure = weightUnits.filter((m: IMeasure) => {
      return m.key !== event.target.value;
    });
    this.weightInput.value = '';
    this.setState({ newWeightUnit: filteredMeasure });
  };

  changeTimeUnit = (event: IPlainObject) => {
    let filteredMeasure = [];
    filteredMeasure = timeUnits.filter((m: IMeasure) => {
      return m.key !== event.target.value;
    });
    this.timeInput.value = '';
    this.setState({ newTimeUnit: filteredMeasure });
  };

  handleLenghtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return false;
    const value = parseFloat(e.target.value);
    if (this.lengthSelect.value == 'Km' && this.lengthTwoSelect.value == 'Mt') {
      this.setState({ newLenghtValue: value * 1000 });
    }
    if (this.lengthSelect.value == 'Km' && this.lengthTwoSelect.value == 'Cm') {
      this.setState({ newLenghtValue: value * 100000 });
    }
    if (this.lengthSelect.value == 'Km' && this.lengthTwoSelect.value == 'In') {
      this.setState({ newLenghtValue: value * 39370.1 });
    }
    if (this.lengthSelect.value == 'Km' && this.lengthTwoSelect.value == 'Ft') {
      this.setState({ newLenghtValue: value * 3280.84 });
    }
    if (this.lengthSelect.value == 'Km' && this.lengthTwoSelect.value == 'Mi') {
      this.setState({ newLenghtValue: value / 1.6 });
    }

    if (this.lengthSelect.value == 'Mi' && this.lengthTwoSelect.value == 'Mt') {
      this.setState({ newLenghtValue: value * 1609.34 });
    }
    if (this.lengthSelect.value == 'Mi' && this.lengthTwoSelect.value == 'Cm') {
      this.setState({ newLenghtValue: value * 160934 });
    }
    if (this.lengthSelect.value == 'Mi' && this.lengthTwoSelect.value == 'In') {
      this.setState({ newLenghtValue: value * 63360 });
    }
    if (this.lengthSelect.value == 'Mi' && this.lengthTwoSelect.value == 'Ft') {
      this.setState({ newLenghtValue: value * 5280 });
    }
    if (this.lengthSelect.value == 'Mi' && this.lengthTwoSelect.value == 'Km') {
      this.setState({ newLenghtValue: value * 1.6 });
    }

    if (this.lengthSelect.value == 'Mt' && this.lengthTwoSelect.value == 'Mi') {
      this.setState({ newLenghtValue: value * 0.0006213689 });
    }
    if (this.lengthSelect.value == 'Mt' && this.lengthTwoSelect.value == 'Cm') {
      this.setState({ newLenghtValue: value * 100 });
    }
    if (this.lengthSelect.value == 'Mt' && this.lengthTwoSelect.value == 'In') {
      this.setState({ newLenghtValue: value * 39.37 });
    }
    if (this.lengthSelect.value == 'Mt' && this.lengthTwoSelect.value == 'Ft') {
      this.setState({ newLenghtValue: value * 3.28 });
    }
    if (this.lengthSelect.value == 'Mt' && this.lengthTwoSelect.value == 'Km') {
      this.setState({ newLenghtValue: value * 0.001 });
    }

    if (this.lengthSelect.value == 'Cm' && this.lengthTwoSelect.value == 'Mi') {
      this.setState({ newLenghtValue: value * 0.00000621 });
    }
    if (this.lengthSelect.value == 'Cm' && this.lengthTwoSelect.value == 'Km') {
      this.setState({ newLenghtValue: value * 0.00001 });
    }
    if (this.lengthSelect.value == 'Cm' && this.lengthTwoSelect.value == 'In') {
      this.setState({ newLenghtValue: value * 0.3937 });
    }
    if (this.lengthSelect.value == 'Cm' && this.lengthTwoSelect.value == 'Ft') {
      this.setState({ newLenghtValue: value * 0.0328 });
    }
    if (this.lengthSelect.value == 'Cm' && this.lengthTwoSelect.value == 'Mt') {
      this.setState({ newLenghtValue: value * 0.01 });
    }

    if (this.lengthSelect.value == 'In' && this.lengthTwoSelect.value == 'Mi') {
      this.setState({ newLenghtValue: value * 1.578333333 });
    }
    if (this.lengthSelect.value == 'In' && this.lengthTwoSelect.value == 'Km') {
      this.setState({ newLenghtValue: value * 2.5400276352555 });
    }
    if (this.lengthSelect.value == 'In' && this.lengthTwoSelect.value == 'Cm') {
      this.setState({ newLenghtValue: value * 2.5400276352 });
    }
    if (this.lengthSelect.value == 'In' && this.lengthTwoSelect.value == 'Ft') {
      this.setState({ newLenghtValue: value * 0.08333424 });
    }
    if (this.lengthSelect.value == 'In' && this.lengthTwoSelect.value == 'Mt') {
      this.setState({ newLenghtValue: value * 0.025400276352 });
    }

    if (this.lengthSelect.value == 'Ft' && this.lengthTwoSelect.value == 'Mi') {
      this.setState({ newLenghtValue: value * 0.00018939346 });
    }
    if (this.lengthSelect.value == 'Ft' && this.lengthTwoSelect.value == 'Km') {
      this.setState({ newLenghtValue: value * 0.0003048 });
    }
    if (this.lengthSelect.value == 'Ft' && this.lengthTwoSelect.value == 'Cm') {
      this.setState({ newLenghtValue: value * 30.48 });
    }
    if (this.lengthSelect.value == 'Ft' && this.lengthTwoSelect.value == 'In') {
      this.setState({ newLenghtValue: value * 12 });
    }
    if (this.lengthSelect.value == 'Ft' && this.lengthTwoSelect.value == 'Mt') {
      this.setState({ newLenghtValue: value * 0.3048 });
    }
  };

  handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return false;
    const value = parseFloat(e.target.value);
    console.log(value);
    if (this.weightSelect.value == 'Kg' && this.weightTwoSelect.value == 'Gr') {
      this.setState({ newWeightValue: value * 1000 });
    }
    if (this.weightSelect.value == 'Kg' && this.weightTwoSelect.value == 'Lb') {
      this.setState({ newWeightValue: value * 2.20462 });
    }
    if (this.weightSelect.value == 'Kg' && this.weightTwoSelect.value == 'Oz') {
      this.setState({ newWeightValue: value * 35.273919 });
    }

    if (this.weightSelect.value == 'Gr' && this.weightTwoSelect.value == 'Kg') {
      this.setState({ newWeightValue: value * 0.001 });
    }
    if (this.weightSelect.value == 'Gr' && this.weightTwoSelect.value == 'Lb') {
      this.setState({ newWeightValue: value * 0.00220462 });
    }
    if (this.weightSelect.value == 'Gr' && this.weightTwoSelect.value == 'Oz') {
      this.setState({ newWeightValue: value * 0.035274 });
    }

    if (this.weightSelect.value == 'Oz' && this.weightTwoSelect.value == 'Kg') {
      this.setState({ newWeightValue: value * 0.0283495 });
    }
    if (this.weightSelect.value == 'Oz' && this.weightTwoSelect.value == 'Lb') {
      this.setState({ newWeightValue: value * 0.0625 });
    }
    if (this.weightSelect.value == 'Oz' && this.weightTwoSelect.value == 'Gr') {
      this.setState({ newWeightValue: value * 28.3495 });
    }

    if (this.weightSelect.value == 'Lb' && this.weightTwoSelect.value == 'Kg') {
      this.setState({ newWeightValue: value * 0.453592 });
    }
    if (this.weightSelect.value == 'Lb' && this.weightTwoSelect.value == 'Oz') {
      this.setState({ newWeightValue: value * 16 });
    }
    if (this.weightSelect.value == 'Lb' && this.weightTwoSelect.value == 'Gr') {
      this.setState({ newWeightValue: value * 453.592 });
    }
  };

  handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return false;
    const value = parseFloat(e.target.value);
    console.log(value);
    if (this.timeSelect.value == 'Sec' && this.timeTwoSelect.value == 'Hrs') {
      this.setState({ newTimeValue: value * 0.000277778 });
    }
    if (this.timeSelect.value == 'Sec' && this.timeTwoSelect.value == 'Min') {
      this.setState({ newTimeValue: value * 0.0166667 });
    }
    if (this.timeSelect.value == 'Sec' && this.timeTwoSelect.value == 'DD') {
      this.setState({ newTimeValue: value * 1.1574097222222 });
    }
    if (this.timeSelect.value == 'Sec' && this.timeTwoSelect.value == 'YYYY') {
      this.setState({ newTimeValue: value * 3.170985539726028888 });
    }

    if (this.timeSelect.value == 'Hrs' && this.timeTwoSelect.value == 'Sec') {
      this.setState({ newTimeValue: value * 3600 });
    }
    if (this.timeSelect.value == 'Hrs' && this.timeTwoSelect.value == 'Min') {
      this.setState({ newTimeValue: value * 60 });
    }
    if (this.timeSelect.value == 'Hrs' && this.timeTwoSelect.value == 'DD') {
      this.setState({ newTimeValue: value * 0.0416667 });
    }
    if (this.timeSelect.value == 'Hrs' && this.timeTwoSelect.value == 'YYYY') {
      this.setState({ newTimeValue: value * 0.000114155342466 });
    }

    if (this.timeSelect.value == 'Min' && this.timeTwoSelect.value == 'Sec') {
      this.setState({ newTimeValue: value * 60 });
    }
    if (this.timeSelect.value == 'Min' && this.timeTwoSelect.value == 'Hrs') {
      this.setState({ newTimeValue: value * 0.0166667 });
    }
    if (this.timeSelect.value == 'Min' && this.timeTwoSelect.value == 'DD') {
      this.setState({ newTimeValue: value * 0.00069444583333 });
    }
    if (this.timeSelect.value == 'Min' && this.timeTwoSelect.value == 'YYYY') {
      this.setState({ newTimeValue: value * 1.90259132419178062 });
    }

    if (this.timeSelect.value == 'DD' && this.timeTwoSelect.value == 'Sec') {
      this.setState({ newTimeValue: value * 86400 });
    }
    if (this.timeSelect.value == 'DD' && this.timeTwoSelect.value == 'Hrs') {
      this.setState({ newTimeValue: value * 24 });
    }
    if (this.timeSelect.value == 'DD' && this.timeTwoSelect.value == 'Min') {
      this.setState({ newTimeValue: value * 1440 });
    }
    if (this.timeSelect.value == 'DD' && this.timeTwoSelect.value == 'YYYY') {
      this.setState({ newTimeValue: value * 0.00273973 });
    }

    if (this.timeSelect.value == 'YYYY' && this.timeTwoSelect.value == 'Sec') {
      this.setState({ newTimeValue: value * 3.1544444444 });
    }
    if (this.timeSelect.value == 'YYYY' && this.timeTwoSelect.value == 'Hrs') {
      this.setState({ newTimeValue: value * 8760 });
    }
    if (this.timeSelect.value == 'YYYY' && this.timeTwoSelect.value == 'Min') {
      this.setState({ newTimeValue: value * 525600 });
    }
    if (this.timeSelect.value == 'YYYY' && this.timeTwoSelect.value == 'DD') {
      this.setState({ newTimeValue: value * 365 });
    }
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
              <h2 style={{ backgroundColor: '#e8e8e8' }}> Longitud </h2>
              <div className="measure-select">
                <input
                  type="num"
                  inputMode="decimal"
                  placeholder="ingrese un numero"
                  onChangeCapture={this.handleLenghtChange}
                  ref={(lenghtInput: HTMLInputElement) => (this.lenghtInput = lenghtInput)}
                />
                <select
                  ref={(lengthSelect: HTMLSelectElement) => (this.lengthSelect = lengthSelect)}
                  onChange={this.changeLenghtUnit}
                  name="longitudA"
                >
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(lengthUnits)}
                </select>
                <span className="measure-select-arrow"></span>
              </div>
              <h3>A:</h3>
              <div className="measure-select">
                <input
                  type="num"
                  inputMode="decimal"
                  placeholder="ingrese un numero"
                  value={this.state.newLenghtValue}
                  ref={(lenghtInputTwo: HTMLInputElement) => (this.lenghtInputTwo = lenghtInputTwo)}
                />
                <select
                  name="longitudB"
                  ref={(lengthTwoSelect: HTMLSelectElement) => (this.lengthTwoSelect = lengthTwoSelect)}
                >
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(this.state.newLenghtUnit)}
                </select>
                <span className="measure-select-arrow"></span>
              </div>
            </div>
            <div className="measure-type">
              <h2 style={{ backgroundColor: '#e8e8e8' }}> Peso </h2>
              <div className="measure-select">
                <input
                  type="num"
                  inputMode="decimal"
                  placeholder="ingrese un numero"
                  onChangeCapture={this.handleWeightChange}
                  ref={(weightInput: HTMLInputElement) => (this.weightInput = weightInput)}
                />
                <select
                  ref={(weightSelect: HTMLSelectElement) => (this.weightSelect = weightSelect)}
                  onChange={this.changeWeightUnit}
                  name="pesoA"
                >
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(weightUnits)}
                </select>
                <span className="measure-select-arrow"></span>
              </div>
              <h3>A:</h3>
              <div className="measure-select">
                <input
                  type="num"
                  inputMode="decimal"
                  placeholder="ingrese un numero"
                  value={this.state.newWeightValue}
                  ref={(weightInputTwo: HTMLInputElement) => (this.weightInputTwo = weightInputTwo)}
                />
                <select
                  name="pesoB"
                  ref={(weightTwoSelect: HTMLSelectElement) => (this.weightTwoSelect = weightTwoSelect)}
                >
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(this.state.newWeightUnit)}
                </select>
                <span className="measure-select-arrow"></span>
              </div>
            </div>
            <div className="measure-type">
              <h2 style={{ backgroundColor: '#e8e8e8' }}> Tiempo </h2>
              <div className="measure-select">
                <input
                  type="num"
                  inputMode="decimal"
                  placeholder="ingrese un numero"
                  onChangeCapture={this.handleTimeChange}
                  ref={(timeInput: HTMLInputElement) => (this.timeInput = timeInput)}
                />
                <select
                  ref={(timeSelect: HTMLSelectElement) => (this.timeSelect = timeSelect)}
                  name="tiempoA"
                  onChange={this.changeTimeUnit}
                >
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(timeUnits)}
                </select>
                <span className="measure-select-arrow"></span>
              </div>
              <h3>A:</h3>
              <div className="measure-select">
                <input
                  type="num"
                  inputMode="decimal"
                  placeholder="ingrese un numero"
                  value={this.state.newTimeValue}
                  ref={(timeInputTwo: HTMLInputElement) => (this.timeInputTwo = timeInputTwo)}
                />
                <select ref={(timeTwoSelect: HTMLSelectElement) => (this.timeTwoSelect = timeTwoSelect)} name="tiempoB">
                  <option value="">Seleccionar valor</option>
                  {this.getUnitValues(this.state.newTimeUnit)}
                </select>
                <span className="measure-select-arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
