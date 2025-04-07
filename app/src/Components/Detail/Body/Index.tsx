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
import StyledCountryName from "../styles/StyledCountryName";
import StyledDetailContainer from "../styles/StyledDetailContainer";
import StyledSecondInformationGroup from "../styles/StyledSecondInformationGroup";
import StyledFirstInformationGroup from "../styles/StyledFirstInformationGroup";

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
    const nameSet =
      nameObject === undefined
        ? ""
        : new Set(Object.values(nameObject).map((nameCode) => nameCode.common));

    return Array.from(nameSet).join(", ");
  };

  const GetAllCurrencyNames = (currencyObject: {
    [key: string]: { name: string; symbol: string };
  }) => {
    const currencies =
      currencyObject === undefined
        ? []
        : Object.values(currencyObject).map((currency) => currency.name);

    return currencies.join(", ");
  };

  const GetAllLanguages = (languageObject: { [key: string]: string }) => {
    const languages =
      languageObject === undefined
        ? []
        : Object.values(languageObject).map((language) => language);

    return languages.join(", ");
  };

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
          <StyledDetailContainer>
            <StyledFlag
              src={countryData[0]?.flags.svg}
              alt={countryData[0]?.flags.alt}
            ></StyledFlag>
            <StyledGrid>
              <StyledCountryName>{countryName}</StyledCountryName>
              <StyledFirstInformationGroup>
                <LabelAndValue
                  label="Native Name"
                  value={
                    GetAllNativeCommonNames(countryData[0]?.name?.nativeName) ??
                    ""
                  }
                ></LabelAndValue>
                <LabelAndValue
                  label="Population"
                  value={countryData[0]?.population ?? ""}
                ></LabelAndValue>
                <LabelAndValue
                  label="Region"
                  value={countryData[0]?.region ?? ""}
                ></LabelAndValue>
                <LabelAndValue
                  label="Sub Region"
                  value={countryData[0]?.subregion ?? ""}
                ></LabelAndValue>
                <LabelAndValue
                  label="Capital"
                  value={countryData[0]?.capital?.join(", ") ?? ""}
                ></LabelAndValue>
              </StyledFirstInformationGroup>
              <StyledSecondInformationGroup>
                <LabelAndValue
                  label="Top Level Domain"
                  value={countryData[0]?.tld.join(", ") ?? ""}
                ></LabelAndValue>
                <LabelAndValue
                  label="Currencies"
                  value={GetAllCurrencyNames(countryData[0]?.currencies) ?? ""}
                ></LabelAndValue>
                <LabelAndValue
                  label="Languages"
                  value={GetAllLanguages(countryData[0]?.languages) ?? ""}
                ></LabelAndValue>
              </StyledSecondInformationGroup>
            </StyledGrid>
          </StyledDetailContainer>
        )}
      </StyledContainer>
    </>
  );
};

export default Body;
