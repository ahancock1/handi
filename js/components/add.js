import React from 'react'

export default class Add extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }

  submit(){
    let prompt = document.getElementById('passPrompt').value

    if(prompt === this.state.pass){
      this.props.appState({
        modal: 'hidden',
        private: false
      })
    }
  }

  render(){
    return (
      <div className="modal">
        <h1>Ajouter une entreprise</h1>
        
        <input type="button" onClick={() => this.submit()} value="Ajouter"/>
      </div>
    )
  }
}
