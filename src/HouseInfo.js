import React, { Component } from 'react';
const data = require('./db.json');

class HouseInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      houses: data,
    }
  }

  render() {

    const houseId = this.props.match.params.houseId;

    return (
      <div>
        <h3>{this.state.houses[houseId].name}</h3>
        <ul>
          {this.state.houses[houseId].photos.map((photo, index) => {
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

export default HouseInfo;