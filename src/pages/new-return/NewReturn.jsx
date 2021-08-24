import React from 'react';
import { useLanguage } from 'contexts/LanguageContext';
import { languagesHeadings } from 'utils/languages/languages';

import { TitleHeading } from 'components/headings/Headings';
import NewReturnForm from './components/new-return-form/NewReturnForm';

import './NewReturn.style.scss';

export default function NewReturn() {
  const { language } = useLanguage();
  const { createNewReturnTitle } = languagesHeadings[language];

  return (
    <section className="new-return-page" data-testid="app-new-return-page">
      <TitleHeading>{createNewReturnTitle}</TitleHeading>
      <NewReturnForm language={language} />
    </section>
  );
}
