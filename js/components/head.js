import React from 'react'

export default class Head extends React.Component {
  render() {
    return(
      <div className="head">
        <img src={this.props.img} />
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}
