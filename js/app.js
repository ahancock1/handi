import React from 'react'
import ReactDOM from 'react-dom'
const {shell} = require('electron')
const {dialog} = require('electron').remote
const path = require('path')

class App extends React.Component {
  render() {
    return(

        <div className="main">

          <div className="modalContainer">
            <Password />
          </div>

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
          private={false}
        />

        <Item
          text="Inventaire"
          def="L'inventaire est un comptage de nos stocks pour chaque client. Il doit être constamment à jour.
          Exemple : Combien j'ai de coques d'avance pour la référence : Pistolet de graissage pour l'entreprise Lacmé.
          Combien j'ai de sachets par référence de l'entreprise La Brosse et Dupont"
          icon="list.svg"
          path="‪C:\Users\Nathan\Desktop\tab_bord.psd"
          private={false}
        />

        <Item
          text="éducateur"
          def="Cet espace est réservé à l'éducateur, vous avez besoin d'un mot de passe."
          icon="minus-circle.svg"
          path={String.raw`C:\Users\Nathan\Desktop\tab_bord.psd`}
          private={true}
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

    var filePath = String.raw`C:\Users\Nathan\Desktop\tab_bord.psd`
    // filePath = filePath.replace(/\\/g, "\\\\")


    if(this.props.private === true){
      // prompt has to be added
      var mdp = "123456"

      if(mdp === "123456"){
        shell.openItem(this.props.path)
      }

    }else{
      shell.openItem(this.props.path)
    }


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



class Password extends React.Component {

  constructor(){
    super()
    this.state = {
      pass: '123456'
    }
  }

  submit(){
    let prompt = document.getElementById('passPrompt').value

    if(prompt === this.state.pass){
      console.log('correct');
    }
    else{
      console.log('incorrect');
    }
  }

  render(){
    return (
      <div className="modal">
        <h1>Mot de passe</h1>
        <input type="text" id="passPrompt" />
        <input type="button" onClick={() => this.submit()} value="OK"/>
      </div>
    )
  }
}





ReactDOM.render(
  <App />,
  document.getElementById('app')
);
