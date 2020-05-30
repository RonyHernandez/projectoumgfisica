import { IHomeProps, defaultProps as props } from '@definitions/IHome';
import Layout from '@src/components/layout';
import React, { Component } from 'react';
import '@static/css/home.css';

class Student extends Component<IHomeProps> {
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
              <h2>Informacion del Alumno</h2>
            </div>
            <div style={{ backgroundColor: '#799fb5' }} className="student-divisions">
              <div style={{ position: 'absolute', right: '30px' }}>
                <img
                  style={{ borderRadius: '100px' }}
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQHRZ-drjGnpzg/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=HRlqQK29jEaElqCBD6uat08UjbZdjxtWsDGaovig_VQ"
                  title="alumno"
                />
              </div>
              <div>
                <span style={{ fontSize: '2em' }}>Nombre: Rony Rene Hernandez Carranza </span>
                <br></br>
                <span style={{ fontSize: '2em' }}>Carné: 3190-12-10598 </span>
                <br></br>
                <span style={{ fontSize: '2em' }}>Correlativo: 4 </span>
                <br></br>
                <span style={{ fontSize: '2em' }}>Sección: A </span>
                <br></br>
                <span style={{ fontSize: '2em' }}>Curso: Fisica 1 </span>
                <br></br>
                <span style={{ fontSize: '2em' }}>Catedrático: Allan Gilberto Villatoro Díaz </span>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Student;
