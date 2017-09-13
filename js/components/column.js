import React from 'react'
import Item from './item'
import Head from './head'


export default class Column extends React.Component {
  render() {
    return(
      <div className="column">
        <Head text={this.props.data.clients[this.props.clientKey].name} img={this.props.data.clients[this.props.clientKey].logo}/>
        <Item
          text="Modes opératoires"
          def={this.props.data.config.def.mo}
          icon={this.props.data.config.icons.mo}
          path={this.props.data.clients[this.props.clientKey].buttons.mo}
          private={false}
          appState={this.props.appState}
        />

        <Item
          text="Inventaire"
          def={this.props.data.config.def.i}
          icon={this.props.data.config.icons.i}
          path={this.props.data.clients[this.props.clientKey].buttons.i}
          private={false}
          appState={this.props.appState}
        />

        <Item
          text="éducateur"
          def={this.props.data.config.def.e}
          icon={this.props.data.config.icons.e}
          path={this.props.data.clients[this.props.clientKey].buttons.e}
          private={this.props.private}
          appState={this.props.appState}
        />
      </div>
    )
  }
}
