import React, { Fragment, } from "react";
import Footer from "./footer/FooterComponent";
import MainComponent from "./main/MainComponent";
import Header from "./header/HeaderComponent";
import { useContext } from "react";
import { ThemeContext } from '../store/themeContext';

const LayoutComponent = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <Fragment>
        <Header></Header>
        <MainComponent >{children}</MainComponent>
        <Footer></Footer>
      </Fragment >
    </div>
  );
};



export default LayoutComponent;
