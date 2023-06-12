import React from 'react';

import PopupWithForm from './PopupWithForm';

function ConfirmPopup({ onLoading, onClose, isOpen, onCardDelete, card, handleOverlayClick }) {
  function handleSubmit(event) {
    event.preventDefault()
    onCardDelete(card)
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonText={onLoading ? `Удаление...` : `Да`}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClick={handleOverlayClick}
    />
  )
}

export default ConfirmPopup;