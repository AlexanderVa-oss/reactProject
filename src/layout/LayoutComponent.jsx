import React, { Fragment, } from "react";
import Footer from "./footer/FooterComponent";
import MainComponent from "./main/MainComponent";
import Header from "./header/HeaderComponent";

const LayoutComponent = ({ children }) => {

  return (
      <Fragment>
      <Header></Header>
      <MainComponent >{children}</MainComponent>
      <Footer></Footer>
    </Fragment >
  );
};
export default LayoutComponent;
