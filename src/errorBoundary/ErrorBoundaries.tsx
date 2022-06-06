import { Component, ErrorInfo } from "react";

export default class ErrorBoundaries extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isErrorOccured: false,
      capturedError: null,
      capturedErrorInfo: null,
    };
  }

  static getDerivedStateFromError(errorInfor: any) {
    return { isErrorOccured: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {

    this.setState({ capturedError: error });
    this.setState({ capturedErrorInfo: errorInfo });
  }

  render() {
    return (
      <>
        {this.state.isErrorOccured ? (
          <div>
            {" "}
            <p style={{ color: 'red' }}>
              {" "}
              Oops Something went wrong <br />
              Try again after some time{" "}
            </p>
            <h3>Captured Below Error</h3>
            <h2 style={{ color: 'blue' }}>
                 {this.state.capturedError && this.state.capturedError.toString()}
                {/* {this.state.capturedError} */}
            </h2>
            <h3>Captured Below Detailed Error Information</h3>
            <p>
                {this.state.capturedErrorInfo&&this.state.capturedErrorInfo.componentStack}
            </p>
          </div>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}
