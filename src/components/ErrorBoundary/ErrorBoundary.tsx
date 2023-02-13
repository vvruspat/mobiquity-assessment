import { Component, ErrorInfo, PropsWithChildren } from "react";
import { Error as ErrorCard } from "../Error/Error";
import s from "./ErrorBoundary.module.css";

type ErrorBoundaryProps = {};
type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    this.setState({ error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={s.error}>
          <ErrorCard>{this.state.error?.message ?? "Unknown error"}</ErrorCard>
        </div>
      );
    }

    return this.props.children;
  }
}
