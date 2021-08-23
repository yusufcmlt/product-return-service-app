import React from 'react';
import TitleHeading from '../../components/headings/TitleHeading';
import { useLanguage } from '../../contexts/LanguageContext';
import languages from '../../utils/languages';
import NewReturnForm from './components/NewReturnForm';

export default function NewReturn() {
  const { language } = useLanguage();
  const { createNewReturn } = languages[language];

  return (
    <section className="new-return-page" data-testid="app-new-return-page">
      <TitleHeading>{createNewReturn}</TitleHeading>
      <NewReturnForm />
    </section>
  );
}
