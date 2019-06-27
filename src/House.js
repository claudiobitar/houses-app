import React, { Component } from 'react';
const data = require('./db.json');

class House extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.house.name}</h3>
        <ul>
          {this.props.house.photos.map((photo, index) => {
            return (
              <li><img src={`/images/${photo}`} /></li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}


export default House;