import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

import { SubHeading, TitleHeading } from '../../components/headings/Headings';
import CustomerLogo from './components/CustomerLogo';
import Button from '../../components/button/Button';

import { languagesButtons, languagesHeadings } from '../../utils/languages/languages';
import { CHECK_TICKET, NEW_TICKET } from '../../routes/RouteContstants';

import './Home.style.scss';

export default function Home() {
  const { language } = useLanguage();
  const { itemReturnSystemTitle, itemReturnSystemSubtitle } = languagesHeadings[language];
  const { newReturn, checkReturnStatus } = languagesButtons[language];

  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  return (
    <section data-testid="app-homepage" className="homepage">
      <div className="homepage__content">
        <TitleHeading>{itemReturnSystemTitle}</TitleHeading>
        <SubHeading>{itemReturnSystemSubtitle}</SubHeading>
        <div className="homepage__content__buttons">
          <Button
            buttonText={newReturn}
            onClickFunction={() => {
              navigateTo(NEW_TICKET);
            }}
          />
          <Button
            buttonText={checkReturnStatus}
            onClickFunction={() => {
              navigateTo(CHECK_TICKET);
            }}
          />
        </div>
      </div>
      <CustomerLogo />
    </section>
  );
}
