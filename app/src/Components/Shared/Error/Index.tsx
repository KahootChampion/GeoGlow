import React from "react";

interface ErrorProps {
  errorMessage: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <>
      <div>The Rest Countries API had an error:</div>
      <div>{errorMessage}</div>
    </>
  );
};

export default ErrorComponent;
