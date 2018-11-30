import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import './styles/global';

import Header from './components/Header';
import Menu from './components/Menu';

import { Container, Wrapper } from './styles/components';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Header />
          <Menu />
          <Routes />
        </Container>
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
