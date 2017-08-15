import React from 'react'

export default class Item extends React.Component {

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
      this.props.modalView('password')
    }else{
      shell.openItem(this.props.path)
    }

    // shell.openItem(this.props.path)


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
