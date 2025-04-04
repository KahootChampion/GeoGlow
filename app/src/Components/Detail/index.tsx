import React from "react";
import { Params, RouteProps, useParams } from "react-router";

interface CompProps extends RouteProps {
    name: string;
  }
const Detail = () => {
  let params: params = useParams();
  params.countryId;
  return <div>Hello World</div>;
};

export default Detail;
