import React from 'react'
import ReactDOM from 'react-dom'
const {shell} = require('electron')
const {dialog} = require('electron').remote
const path = require('path')
const Mousetrap = require('mousetrap')
const jsonDB = require('node-json-db')
const db = new jsonDB('database', true, true)

import Column from './js/components/column'
import Add from './js/components/add'
import Password from './js/components/password'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      modal: 'hidden',
      private: true,
      data: {}
    }
  }

  componentWillMount() {
    var data = db.getData('/')
    this.setState({data: data})
  }

  componentDidMount() {
    Mousetrap.bind('ctrl+h', () => this.setState({modal: 'add'}) )
    Mousetrap.bind('esc', () => this.setState({modal: 'hidden'}) )
  }



  appState (content) {
    this.setState(content)
  }

  render() {
    var modal

    if (this.state.modal === 'hidden') {
      modal = false
    }
    else if (this.state.modal === 'password') {
      modal = <div className="modalContainer">
                <Password appState={this.appState.bind(this)} data={this.state.data} />
              </div>
    }
    else if (this.state.modal === 'add') {
      modal = <div className="modalContainer">
                <Add appState={this.appState.bind(this)} />
              </div>
    }


    if(Object.keys(this.state.data.clients).length != 0){
      var columns = Object.keys(this.state.data.clients).map(i  => <Column key={i} appState={this.appState.bind(this)} private={this.state.private} data={this.state.data} clientKey={i}/> )
    }
    else{
      var columns = <h1 className="empty">
                      Aucun client n'est dans la base de donnée, voulez-vous en ajouter ?
                      <span>ctrl+h</span>
                    </h1>
    }

    return(
        <div className="main">
          {modal}
          {columns}
        </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
