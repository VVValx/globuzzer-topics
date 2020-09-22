import React from "react";
import Menu from "./menu/menu";
import Banner from "./banner/banner";
import Body from "./body/body";

function Topic() {
  return (
    <React.Fragment>
      <Menu />
      <Banner />
      <Body />
    </React.Fragment>
  );
}

export default Topic;
