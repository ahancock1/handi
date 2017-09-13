import React from 'react'
const fs = require('fs')
const path = require('path')
let dbPath = '..\\..\\..\\database.json'

const db = require(dbPath)

export default class Add extends React.Component {


  constructor() {
    super()
    this.state = {
      confirm: false
    }
  }

  submit(){
    if(this.state.confirm === true){
        let name = document.getElementById('add-name').value,
          img = document.getElementById('add-img').files[0].path,
          mo = document.getElementById('add-mo').files[0].path,
          i = document.getElementById('add-i').files[0].path,
          e = document.getElementById('add-e').files[0].path,
          imgBase = path.parse(img).base

      fs.createReadStream(img).pipe(fs.createWriteStream(__dirname + '\\img\\clients\\' + imgBase))

      db.clients[name] = {
        logo: imgBase,
        name: name,
        buttons: {
          mo: mo,
          i: i,
          e: e
        }
      }

      fs.writeFileSync(__dirname + '\\' + dbPath, JSON.stringify(db, null, '\t'))
      this.close()
    }
    else{
      this.setState({confirm: true})
    }

  }

  close(){
    this.props.appState({modal: "hidden"})
  }

  render(){
    return (
      <div className="modal">
        <button onClick={() => this.close()} className="close">
          <img src="img/cross-out.svg" />
        </button>
        <h1>Ajouter un client</h1>

        <input type="text" placeholder="Nom du client" id="add-name" />

        <label>
          Logo du client
          <input type="file" id="add-img" accept="image/*"/>
        </label>

        <label>
          Mode Opératoire
          <input type="file" id="add-mo"/>
        </label>

        <label>
          Inventaire
          <input type="file" id="add-i"/>
        </label>

        <label>
          Éducateur
          <input type="file" id="add-e"/>
        </label>

        <input type="button" onClick={() => this.submit()} value={this.state.confirm === false ? 'Ajouter' : 'Confirmer'} className="submitBtn"/>
      </div>
    )
  }
}
