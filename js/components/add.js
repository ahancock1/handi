import React from 'react'
const fs = require('fs')
const path = require('path')
const jsonDB = require('node-json-db')
const db = new jsonDB('database', true, true)

export default class Add extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }

  submit(){
    let name = document.getElementById('add-name').value,
        img = document.getElementById('add-img').files[0].path,
        mo = document.getElementById('add-mo').files[0].path,
        i = document.getElementById('add-i').files[0].path,
        e = document.getElementById('add-e').files[0].path,
        imgBase = path.parse(img).base


    fs.createReadStream(img).pipe(fs.createWriteStream('./img/clients/' + imgBase))

    db.push("/clients/" + name, {
      logo: imgBase,
      name: name,
      buttons: {

        mo: {
          path: mo
        },

        i: {
          path: i
        },

        e: {
          path: e
        }

      }
    })

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
          <input type="file" id="add-img"/>
          Logo du client
        </label>

        <label>
          <input type="file" id="add-mo"/>
          Mode Opératoire
        </label>

        <label>
          <input type="file" id="add-i"/>
          Inventaire
        </label>

        <label>
          <input type="file" id="add-e"/>
          Éducateur
        </label>

        <input type="button" onClick={() => this.submit()} value="Ajouter" className="submitBtn"/>
      </div>
    )
  }
}
