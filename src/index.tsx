import React from 'react';
import Button from './Components/Button/Button';
import './ReactModal.css';


interface Props {
  /** 
   * useState function to control open/close Modal
  */
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * A boolean variable from useState. true: open the Modal, false: close the Modal
   */
  showModal: boolean
  /**
   * The message shows on the Modal
   */
  message: string
  /**
   * Adding a class name to style the messge
   */
  messageStyle?: string
  /**
   * The onclick function of the ActionButton
   */
  handleAction?: (param: any) => any
  /**
   * The parameter of the onclick function
   */
  param?: string | number | undefined
  /**
   * Adding a class name to style the buttons
   */
  actionButtonStyle?: string
  /**
   * Adding a class name to style the buttons
   */
  closeButtonStyle?: string
  /**
   * Action Button display text. Default "Yes"
   */
  actionButtonText?: string
  /**
   * Close Button display text. Default "No"
   */
  closeButtonText?: string
}

const ReactModal = ({
  setShowModal,
  showModal,
  message,
  messageStyle,
  handleAction,
  param,
  actionButtonStyle,
  closeButtonStyle,
  actionButtonText,
  closeButtonText,
}: Props) => {
  return (
    <>
      {showModal && (
        <>
          <div className="overlay"></div>
          <section className="react-modal-container">
            <div className="react-modal-container__top-container">
              <h1 className={`react-modal-container__title ${messageStyle}`}>
                {message}
              </h1>
            </div>
            <div className="react-modal-container__button-container">
              <div>
                {handleAction ? (
                  <Button
                    buttonText={actionButtonText || 'Yes'}
                    UniqueStyleClass={`${actionButtonStyle} react-modal-container__button`}
                    onClick={() => handleAction(param)}
                  />
                ) : (
                  <Button
                    buttonText={actionButtonText || 'Yes'}
                    UniqueStyleClass={`${actionButtonStyle} react-modal-container__button`}
                    onClick={() => alert('Button clicked. You can pass in a custom function')}
                  />
                )}
              </div>
              <div>
                <Button
                  buttonText={closeButtonText || 'No'}
                  UniqueStyleClass={`${closeButtonStyle} react-modal-container__button`}
                  onClick={() => setShowModal(false)}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ReactModal;




