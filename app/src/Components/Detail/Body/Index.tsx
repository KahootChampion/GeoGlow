import React from "react";
import StyledButtonContainer from "../styles/StyledButtonContainer";
import StyledBackArrow from "../styles/StyledBackArrow";
import StyledButton from "../styles/StyledButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledContainer from "../../Shared/StyledContainer";
import { useNavigate } from "react-router";
import StyledFlag from "../styles/StyledFlag";

const Body = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const flagUrl = searchParams.get("flag") ?? "";
  const alt = searchParams.get("alt") ?? "";

  return (
    <StyledContainer>
      <StyledButtonContainer>
        <StyledButton onClick={() => navigate(-1)}> Back </StyledButton>
        <StyledBackArrow
          icon={"fa-classic fa-solid fa-arrow-left" as IconProp}
        ></StyledBackArrow>
      </StyledButtonContainer>
      <StyledFlag src={flagUrl} alt={alt}></StyledFlag>
    </StyledContainer>
  );
};

export default Body;
