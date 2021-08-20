import React from 'react';

import './Button.style.scss';

export default function Button({
  buttonText,
  isSubmit,
  buttonStyle = 'black',
  onClickFunction = () => {},
}) {
  return (
    <button
      className={`btn btn--${buttonStyle}`}
      data-testid="app-btn"
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClickFunction}
    >
      {buttonText}
    </button>
  );
}
