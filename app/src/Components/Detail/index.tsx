import { useParams } from "react-router";

type DetailProps = {
  countryName: string;
};
const Detail = () => {
  const { countryName } = useParams<DetailProps>();
  return <div>{countryName}</div>;
};

export default Detail;
