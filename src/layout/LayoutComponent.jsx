import React, { Fragment } from "react";
import Header from "./header/HeaderCompomemt";
import Footer from "./footer/FooterComponent";
import MainComponent from "./main/MainComponent";

const LayoutComponent = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      <MainComponent>{children}</MainComponent>
      <Footer></Footer>
    </Fragment>
  );
};
export default LayoutComponent;
