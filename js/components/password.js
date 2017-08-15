import React from 'react'

export default class Password extends React.Component {

  constructor(){
    super()
    this.state = {
      pass: '123456'
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
        <h1>Mot de passe</h1>
        <input type="text" id="passPrompt" />
        <input type="button" onClick={() => this.submit()} value="OK"/>
      </div>
    )
  }
}
