import React from 'react'
import ReactDOM from 'react-dom'
const {shell} = require('electron')
const path = require('path')

class App extends React.Component {
  render() {
    return(
      <div className="main">
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    )
  }
}







class Column extends React.Component {
  render() {
    return(
      <div className="column">
        <Head />
        <Item
          text="Modes opératoires"
          def="Un mode opératoire consiste en la description détaillée des actions nécessaires à l'obtention d'un résultat.
          Exemple : je n'ai jamais fait ce travail. J'ai un doute. Je ne me rappelle plus comment faire."
          icon="man-thinking.svg"
          path="‪C:\Users\Nathan\Desktop\tab_bord.psd"
        />

        <Item
          text="Inventaire"
          def="L'inventaire est un comptage de nos stocks pour chaque client. Il doit être constamment à jour.
          Exemple : Combien j'ai de coques d'avance pour la référence : Pistolet de graissage pour l'entreprise Lacmé.
          Combien j'ai de sachets par référence de l'entreprise La Brosse et Dupont"
          icon="list.svg"
          path="‪C:\Users\Nathan\Desktop\tab_bord.psd"
        />

        <Item
          text="éducateur"
          def="Cet espace est réservé à l'éducateur, vous avez besoin d'un mot de passe."
          icon="minus-circle.svg"
          path="‪C:\Users\Nathan\Desktop\tab_bord.psd"
        />
      </div>
    )
  }
}





class Head extends React.Component {
  render() {
    return(
      <div className="head">
        <img src="img/lacme.png" />
        <h1>Lacme</h1>
      </div>
    )
  }
}





class Item extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      access: 'default'
    }
  }


  default() {
    this.setState({access: 'default'})
  }

  hear() {
    var synth = window.speechSynthesis
    var speech = new SpeechSynthesisUtterance(this.props.def)
    speech.lang = 'fr-FR'

    synth.speak(speech)
  }

  see() {
    this.state.access === 'default' ? this.setState({access: 'see'}) : this.setState({access: 'default'})
  }

  open() {
    let filePath = this.props.path
    filePath = filePath.replace(/\\/g,"\\\\")


    console.log(filePath)
    shell.openItem(filePath)
  }



  render() {
    return(
      <div className="item" onMouseLeave={() => this.default()}>
        <img src={"img/" + this.props.icon} />
        <h1>{this.props.text}</h1>
        <div className={"infos " + this.state.access}>
          <p>
            {this.props.def}
          </p>

           <div className="btnContainer">
             <button className="btnSecondary" onClick={() => this.hear()}>
               <img src="img/ear.svg" />
             </button>
             <button className="btnSecondary" onClick={() => this.see()}>
               <img src="img/eye.svg" />
             </button>
             <button className="btnPrimary" onClick={() => this.open()}>
               consulter
             </button>
           </div>
        </div>
      </div>
    )
  }
}






ReactDOM.render(
  <App />,
  document.getElementById('app')
);
