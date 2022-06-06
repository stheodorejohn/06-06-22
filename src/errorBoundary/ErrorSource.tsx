import React, { Component } from "react";

export class ErrorSource extends Component {
  render() {
    function TestError() {
      console.log("error thrown successfully");
      throw new Error("A new Error occured now ");
      return <>Error content </>;
    }
    return <div>ErrorSource Component {TestError()}</div>;
  }
}

export default ErrorSource;