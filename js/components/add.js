import React from 'react'
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
        e = document.getElementById('add-e').files[0].path

    db.push("/client/" + name, {
      logo: img,
      name: name,
      buttons: [

        {
          text: "Modes opératoires",
          icon: "man-thinking.svg",
          def: "Un mode opératoire consiste en la description détaillée des actions nécessaires à l'obtention d'un résultat. Exemple : je n'ai jamais fait ce travail. J'ai un doute. Je ne me rappelle plus comment faire.",
          path: mo,
          private: false
        },

        {
          text: "Inventaire",
          icon: "list.svg",
          def: "L'inventaire est un comptage de nos stocks pour chaque client. Il doit être constamment à jour. Exemple : Combien j'ai de coques d'avance pour la référence : Pistolet de graissage pour l'entreprise Lacmé. Combien j'ai de sachets par référence de l'entreprise La Brosse et Dupont",
          path: i,
          private: false
        },

        {
          text: "Éducateur",
          icon: "minus-circle.svg",
          def: "Cet espace est réservé à l'éducateur, vous avez besoin d'un mot de passe.",
          path: e,
          private: true
        }

      ]
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
