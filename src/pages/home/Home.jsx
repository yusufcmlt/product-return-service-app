import React from 'react';
import { useHistory } from 'react-router-dom';

import TitleHeading from '../../components/headings/TitleHeading';
import SubHeading from '../../components/headings/SubHeading';
import { useLanguage } from '../../contexts/LanguageContext';
import languages from '../../utils/languages';

import './Home.style.scss';
import CustomerLogo from './CustomerLogo';
import Button from '../../components/button/Button';
import { CHECK_TICKET, NEW_TICKET } from '../../routes/RouteContstants';

export default function Home() {
  const { language } = useLanguage();
  const { itemReturnSystem, itemReturnSytemSubtext, newReturn, checkReturnStatus } =
    languages[language];

  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  return (
    <section data-testid="app-homepage" className="homepage">
      <div className="homepage__content">
        <TitleHeading>{itemReturnSystem}</TitleHeading>
        <SubHeading>{itemReturnSytemSubtext}</SubHeading>
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
