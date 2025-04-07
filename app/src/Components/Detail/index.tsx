import { useParams } from "react-router";
import Header from "../Shared/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import StyledBackButton from "./styles/StyledButtonContainer";
import StyledButton from "./styles/StyledButton";
import StyledBackArrow from "./styles/StyledBackArrow";
import StyledButtonContainer from "./styles/StyledButtonContainer";
import Body from "./Body/Index";

type DetailProps = {
  countryName: string;
};
const Detail = () => {
  const { countryName } = useParams<DetailProps>();
  return (
    <>
      <Header></Header>
      <Body></Body>
    </>
  );
};

export default Detail;
