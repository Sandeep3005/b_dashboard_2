import React, { Component, Fragment } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import APIDetails from "./../components/APIDetails/APIDetails";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <APIDetails />
      </Fragment>
    );
  }
}

export default Layout;
