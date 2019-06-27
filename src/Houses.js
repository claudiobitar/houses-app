import React, { Component } from 'react'
import House from './House'

var data = require('./db.json');


class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    this.setState({
      houses: data
    })
  }

  render() {
    const { houses } = this.state;
    return (
      <div className="content house">
        {
          houses.map((house, index) => {
            return (
              <div>            
                <House house={house} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Houses
