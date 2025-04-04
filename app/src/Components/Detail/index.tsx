import { useParams } from "react-router";

const Detail = () => {
  const params = useParams();
  return <div>{params.countryName}</div>;
};

export default Detail;
