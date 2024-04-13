import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Home from './pages/home';
import { Header, Footer, Main } from './components/ui';
import "./App.css"
import { QueryClientProvider, QueryClient } from 'react-query';
import { Typography } from './components/typography';
import { Card } from './components/ui/card';
import { ButtonCart } from './components/ui/buttonCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SidebarProvider from './contexts/sideBarContext';
import SidebarTemplate from './templates/sidebar';

const client = new QueryClient()

function App() {
  return (<ThemeProvider theme={theme}>
    <QueryClientProvider client={client}>
      <SidebarProvider>
        <Screen />
      </SidebarProvider>
    </QueryClientProvider>
  </ThemeProvider>);
}

function Screen() {

  return (
  <>
    <Header.Root>
      <Header.Row>
        <div style={{ display: 'flex', alignItems: "flex-end", gap: '4px' }}>
          <Header.Logo>MKS</Header.Logo>
          <Header.LogoSpan>Sistemas</Header.LogoSpan>
        </div>
        <Card disabledShadow>
          <ButtonCart>
            <FontAwesomeIcon icon={faCartShopping} />
            0
          </ButtonCart>
        </Card>
      </Header.Row>
    </Header.Root>
    <Main>
      <Home />
    </Main>
    <Footer>
      <Typography>
        MKS Sistemas © Todos os direitos reservados
      </Typography>
    </Footer>
    <SidebarTemplate />
  </>
  )
}

export default App;
