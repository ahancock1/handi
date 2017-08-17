import React from 'react'
const fs = require('fs')
const path = require('path')
const jsonDB = require('node-json-db')
const db = new jsonDB('database', true, true)

export default class Remove extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  remove(id){
    fs.unlink('./img/clients/' + this.state.data.clients[id].logo)
    db.delete('/clients/' + this.state.data.clients[id].name)
  }

  close(){
    this.props.appState({modal: "hidden"})
  }

  componentWillMount() {
    var data = db.getData('/')
    this.setState({data: data})
  }

  render(){

    let list = Object.keys(this.state.data.clients).map(i => <li key={i}>
                                                              {this.state.data.clients[i].name}
                                                              <button onClick={() => this.remove(i)} className="removeBtn">
                                                                <img src="./img/rubbish-bin.svg" />
                                                              </button>
                                                            </li>)

    return (
      <div className="modal">
        <button onClick={() => this.close()} className="close">
          <img src="img/cross-out.svg" />
        </button>

        <h1>Supprimer un client</h1>

        <ul className="removeList">
          {list}
        </ul>

      </div>
    )
  }
}
