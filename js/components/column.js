import React from 'react'
import Item from './item'
import Head from './head'


export default class Column extends React.Component {
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
          appState={this.props.appState}
        />

        <Item
          text="Inventaire"
          def="L'inventaire est un comptage de nos stocks pour chaque client. Il doit être constamment à jour.
          Exemple : Combien j'ai de coques d'avance pour la référence : Pistolet de graissage pour l'entreprise Lacmé.
          Combien j'ai de sachets par référence de l'entreprise La Brosse et Dupont"
          icon="list.svg"
          path="‪C:\Users\Nathan\Desktop\tab_bord.psd"
          private={false}
          appState={this.props.appState}
        />

        <Item
          text="éducateur"
          def="Cet espace est réservé à l'éducateur, vous avez besoin d'un mot de passe."
          icon="minus-circle.svg"
          path={String.raw`C:\Users\Nathan\Desktop\tab_bord.psd`}
          private={this.props.private}
          appState={this.props.appState}
        />
      </div>
    )
  }
}
