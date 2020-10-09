import React, { Component } from 'react'  

import axios from 'axios';  

import {Doughnut} from 'react-chartjs-2';  

export class DatosT extends Component {

  render() {

    return (<div>

    </div>

    )

  } constructor(props) {

    super(props);

    this.state = { Data: {} };

  }

  componentDidMount() {

    axios.get(`http://localhost:5000/Api/projects`)

      .then(res => {

        console.log(res);

        const ipl = res.data;

        let meta = [];

        let monto_recaudado = [];

        ipl.forEach(record => {

          meta.push(record.meta);

          monto_recaudado.push(record.monto_recaudado);

        });

        this.setState({

          Data: {

            labels: ["meta","monto_recaudado"],

            datasets: [

              {

                labels: [meta,monto_recaudado],

                data: [50,10],

                backgroundColor: [ "Blue", "Red" ]

              }

            ]

          }

        });

      })

  }

  render() {

    return (

      <div>

        <Doughnut data={this.state.Data}

          options={{ maintainAspectRatio: false }} ></Doughnut>

      </div>

    )

  }

}



export default DatosT;