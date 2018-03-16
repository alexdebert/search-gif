/**
 * @overview Gif Modal component.
 */

//React
import React from 'react';
import Modal from 'react-modal';

//Styles
import './GifModal.scss'

const GifModal = (props) => {
  if (!props.selectedGif) {
    return <div></div>;
  }

  return (
    <Modal ariaHideApp={false}
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className="modal-container">
        <img src={ props.selectedGif.images.original.url } />
        <p><strong>Source:</strong> <a href={ props.selectedGif.source }>{ props.selectedGif.source }</a></p>
        <p><strong>Rating:</strong> { props.selectedGif.rating }</p>

        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default GifModal;