import React from 'react';

import './InfoText.style.scss';

const InfoText = ({ title = '', detail = '' }) => (
  <span className="info">
    <h6 className="info__title">{title}</h6>

    <p className="info__detail">{detail}</p>
  </span>
);

export default InfoText;
