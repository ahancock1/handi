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

  close(){
    this.props.appState({modal: "hidden"})
  }

  render(){
    return (
      <div className="modal">
        <button onClick={() => this.close()} className="close">
          <img src="img/cross-out.svg" />
        </button>
        <h1>Mot de passe</h1>
        <input type="text" id="passPrompt" />
        <input type="button" onClick={() => this.submit()} value="OK" className="submitBtn"/>
      </div>
    )
  }
}
