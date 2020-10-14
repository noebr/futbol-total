import React, { Component } from "react";

import axios from "axios";

import { Doughnut } from "react-chartjs-2";


export class DatosT extends Component {
  render() {
    return <div></div>;
  }
  constructor(props) {
    /* console.log(props.meta)*/
    super(props);
    this.meta = props.meta;
    this.monto_recaudado = props.monto_recaudado;

    this.state = { Data: {} };
  }

  componentDidMount() {
    const meta = this.meta;
    const monto_recaudado = this.monto_recaudado;
    this.setState({
      Data: {
        labels: ["meta", "monto_recaudado"],

        datasets: [
          {
            labels: [meta, monto_recaudado],

            data: [meta, monto_recaudado],

            backgroundColor: ["Blue", "Red"],
          },
        ],
        
      },
      
    });

    /*  axios.get(`http://localhost:5000/Api/projects`)

      .then(res => {

        console.log(res);

        const ipl = res.data;

        let meta = 0;

        let monto_recaudado = 0;

        ipl.forEach(record => {

          meta=record.meta;

          monto_recaudado=record.monto_recaudado;
          

        });
        console.log(meta,monto_recaudado);

        this.setState({

          Data: {

            labels: ["meta","monto_recaudado"],

            datasets: [

              {

                labels: [meta,monto_recaudado],

                data: [meta,monto_recaudado],

                backgroundColor: [ "Blue", "Red" ]

              }

            ]

          }

        });

      })*/
  }

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.Data}
          options={{ maintainAspectRatio: false, }}
        ></Doughnut>
      </div>
    );
  }
}

export default DatosT;
