import React from 'react'
import ReactDOM from 'react-dom'
const {shell} = require('electron')
const {dialog} = require('electron').remote
const path = require('path')

import Column from './js/components/column'
import Password from './js/components/password'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      modal: 'password'
    }
  }

  modalView (view) {
    this.setState({
      modal: view
    })
  }

  render() {
    var modal

    if (this.state.modal === 'hidden') {
      modal = false
    }
    else if (this.state.modal === 'password') {
      modal = <div className="modalContainer">
                <Password modalView={this.modalView.bind(this)} />
              </div>
    }

    return(
        <div className="main">
          {modal}
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
