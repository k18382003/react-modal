import React from 'react';
import './Button.css';

interface Props {
  buttonText: string,
  onClick?: any,
  buttonIconUrl?: string, 
  UniqueStyleClass?: string,
  type?: "submit" | "reset" | "button" | undefined
}


const Button = ({
  buttonText,
  onClick,
  buttonIconUrl,
  UniqueStyleClass,
  type,
}:Props) => {
  return (
    <>
      <button
        className={`my-button ${UniqueStyleClass}`}
        style={{
          backgroundImage: `url(${buttonIconUrl})`,
        }}
        type={type || "button"}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
