import React from "react";
import StyledContainer from "./styles/StyledContainer";
import ErrorComponent from "./Error/Index";

const LoadingAndErrorComponent = ({
  isLoading,
  error,
}: {
  isLoading: boolean;
  error: string;
}) => {
  return (
    <StyledContainer>
      {isLoading && <p>Loading...</p>}
      {error && <ErrorComponent errorMessage={error} />}
    </StyledContainer>
  );
};

export default LoadingAndErrorComponent;
