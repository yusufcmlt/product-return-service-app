import React from 'react';

import './Button.style.scss';

export default function Button({
  buttonText,
  isSubmit = false,
  isDisabled = false,
  buttonStyle = 'black',
  onClickFunction = () => {},
}) {
  return (
    <button
      className={`btn btn--${buttonStyle}`}
      data-testid="app-btn"
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClickFunction}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}
