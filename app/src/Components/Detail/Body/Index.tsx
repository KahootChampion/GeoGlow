import React from "react";
import StyledButtonContainer from "../styles/StyledButtonContainer";
import StyledBackArrow from "../styles/StyledBackArrow";
import StyledButton from "../styles/StyledButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledContainer from "../../Shared/StyledContainer";
import { useNavigate, useParams } from "react-router";
import StyledFlag from "../styles/StyledFlag";
import StyledGrid from "../styles/StyledGrid";
import LabelAndValue from "../../Shared/LabelAndValue/LabelAndValue";
import useFetchSpecificCountry from "./useFetchSpecificCountry";
import LoadingAndErrorComponent from "../../Shared/LoadingAndErrorComponent";

const Body = () => {
  type DetailProps = {
    countryName: string;
  };

  const navigate = useNavigate();
  const { countryName } = useParams<DetailProps>();
  const { countryData, isLoading, error } = useFetchSpecificCountry(
    countryName ?? ""
  );

  const GetAllNativeCommonNames = (
    nameObject: Record<string, { official: string; common: string }>
  ) => {
    console.log(nameObject);
    const nameSet =
      nameObject === undefined
        ? ""
        : new Set(Object.values(nameObject).map((nameCode) => nameCode.common));

    return Array.from(nameSet).join(", ");
  };
  console.log("delete this");

  return (
    <>
      <StyledContainer>
        <StyledButtonContainer>
          <StyledButton onClick={() => navigate(-1)}> Back </StyledButton>
          <StyledBackArrow
            icon={"fa-classic fa-solid fa-arrow-left" as IconProp}
          ></StyledBackArrow>
        </StyledButtonContainer>
        {error ? (
          <LoadingAndErrorComponent
            isLoading={isLoading}
            error={error ?? ""}
          ></LoadingAndErrorComponent>
        ) : (
          <>
            <StyledFlag
              src={countryData[0]?.flags.svg}
              alt={countryData[0]?.flags.alt}
            ></StyledFlag>
            <StyledGrid>
              <h2>{countryName}</h2>
              <LabelAndValue
                label="Native Name"
                value={
                  GetAllNativeCommonNames(countryData[0]?.name?.nativeName) ??
                  ""
                }
              ></LabelAndValue>
              <LabelAndValue
                label="Capital"
                value={countryData[0]?.capital?.join(", ") ?? ""}
              ></LabelAndValue>
            </StyledGrid>
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default Body;
