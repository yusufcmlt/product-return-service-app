import React from 'react';
import { useHistory } from 'react-router-dom';

import { CHECK_TICKET, NEW_TICKET } from 'routes/RouteContstants';

import Button from 'components/button/Button';
import { SubHeading, TitleHeading } from 'components/headings/Headings';
import CustomerLogo from './components/CustomerLogo';

import './Home.style.scss';

export default function Home() {
  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  return (
    <section data-testid="app-homepage" className="homepage">
      <div className="homepage__content">
        <TitleHeading>Ürün İade Sistemi</TitleHeading>
        <SubHeading>
          Ürün iade işlemi başlatabilir veya iade sürecinizi takip edebilirsiniz.
        </SubHeading>
        <div className="homepage__content__buttons">
          <Button
            buttonText="Yeni İade"
            onClickFunction={() => {
              navigateTo(NEW_TICKET);
            }}
          />
          <Button
            buttonText="İade Durum Sorgula"
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
