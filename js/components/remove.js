import React from 'react'
const fs = require('fs')
const path = require('path')
let dbPath = '..\\..\\..\\database.json'

const db = require(dbPath)

export default class Remove extends React.Component {

  constructor() {
    super()
    this.state = {
      confirm: false
    }
  }

  remove(id){
    if (this.state.confirm === true){
      fs.unlink(__dirname + '\\img\\clients\\' + this.state.data.clients[id].logo)
      delete(db.clients[id])

      fs.writeFileSync(__dirname + '\\' + dbPath, JSON.stringify(db, null, '\t'))
      this.close()
    }
    else {
      this.setState({confirm: true})
    }

  }

  close(){
    this.props.appState({modal: "hidden"})
  }

  componentWillMount() {
    this.setState({data: db})
  }

  render(){

    let list = Object.keys(this.state.data.clients).map(i => <li key={i}>
                                                              {this.state.data.clients[i].name}
                                                              <button onClick={() => this.remove(i)} className="removeBtn">
                                                                {this.state.confirm === false ? <img src="./img/rubbish-bin.svg" /> : 'Confirmer'}
                                                              </button>
                                                            </li>)

    return (
      <div className="modal">
        <button onClick={() => this.close()} className="close">
          <img src='img/cross-out.svg' />
        </button>

        <h1>Supprimer un client</h1>

        <ul className="removeList">
          {list}
        </ul>

      </div>
    )
  }
}
