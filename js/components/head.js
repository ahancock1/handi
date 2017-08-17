import React from 'react'

export default class Head extends React.Component {
  render() {
    return(
      <div className="head">
        <img src={'./img/clients/' + this.props.img} />
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}
