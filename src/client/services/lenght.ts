export interface IMeasure {
  measure: string;
  key: string;
}

const lengthUnits: IMeasure[] = [
  {
    measure: 'Kilometros',
    key: 'Km',
  },
  {
    measure: 'Metros',
    key: 'Mt',
  },
  {
    measure: 'Millas',
    key: 'Mi',
  },
  {
    measure: 'Pies',
    key: 'Ft',
  },
  {
    measure: 'Centimetros',
    key: 'Cm',
  },
  {
    measure: 'Pulgadas',
    key: 'In',
  },
];

export default lengthUnits;
