import React from 'react';

import './App.scss';
import Header from './components/header/Header';
import PageWrapper from './components/page-wrapper/PageWrapper';
import RouterConfig from './routes/RouterConfig';

function App() {
  return (
    <div className="app">
      <Header />
      <PageWrapper>
        <RouterConfig />
      </PageWrapper>
    </div>
  );
}

export default App;
