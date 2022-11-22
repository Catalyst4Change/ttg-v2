import React from 'react'
import { CharSheet } from '../CharSheet'
import { Form } from '../Form'

export const CardContainer = ({ addPlayerCharacter, playerChar }) => {
  // this component contains the form and resulting character sheet

  const playerCards = () => {
    
  }

  return (
    <div className='card-container'>
      <Form
        addPlayerCharacter={addPlayerCharacter} 
      />
      <CharSheet></CharSheet>
    </div>
  )
}
