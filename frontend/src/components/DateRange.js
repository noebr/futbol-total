import React, { Component } from "react";


class DateRange extends Component {
  render() {
    
    return (
      <div>
        <div className="range">
          <p>De</p>
          <input className="input-date" type="date"></input>
          <p>Hasta</p>
          <input className="input-date" type="date"></input>
        </div>
      </div>
    );
  }
}
export default DateRange;
