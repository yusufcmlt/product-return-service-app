import React from 'react';

import './InfoText.style.scss';

const InfoText = ({ title = '', detail = '', ...restProps }) => (
  <span className="info" {...restProps}>
    <h6 className="info__title">{title}</h6>
    <p className="info__detail">{detail}</p>
  </span>
);

export default InfoText;
