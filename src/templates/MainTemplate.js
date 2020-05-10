import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import Sidebar from '../components/organisms/Sidebar';
import List from '../views/List';
import Logo from '../assets/icons/AppLogo.svg';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 160px calc(100vw - 160px);
  grid-template-rows: 140px calc(100vh - 140px);
  grid-template-areas:
    'header header'
    'sidebar content';
  overflow: hidden;
`;


const AppLogo = styled.div`
  grid-area: header;
  margin-left: 30px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center left;
  background-color: transparent;
`;

const StyledSidebar = styled(Sidebar)`
  margin-top: 50px;
  grid-area: sidebar;
`;

const Content = styled.div`
  grid-area: content;
  border-radius: 70px 0 0 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  background-color: ${theme.green100};
`;

const Inventory = styled.div`
  flex: 0 0 auto;
  flex-basis: 62%;
  padding: 35px 40px;
  border-radius: 70px 0 0 0;
`;

const ShopList = styled.div`
  flex: 0 0 auto;
  flex-basis: 38%;
  padding: 35px 40px;
  border-radius: 70px 0 0 0;
  background-color: white;
`;

const MainTemplate = ({ children, openModalFn }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <StyledWrapper>
          <AppLogo/>
          <StyledSidebar />
          <Content>
            <Inventory>{children}</Inventory>
            <ShopList><List openModalFn={openModalFn}/></ShopList>
          </Content>
        </StyledWrapper>
      </>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  openModalFn: PropTypes.func.isRequired,
};

export default MainTemplate;
