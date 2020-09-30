import React from "react";
import Menu from "./menu/menu";
import Banner from "./banner/banner";
import Body from "./body/body";
import Footer from "../../footer/footer";

function Topic() {
  return (
    <React.Fragment>
      <Menu />
      <Banner />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default Topic;
