// import React from "react";
import { useGetAdvertsQuery } from "../../redux/adverts/advertsApi";

const HomePage = () => {
  const { data } = useGetAdvertsQuery();

  if (!data) return null;
  console.log(data);

  return <div>Home page</div>;
};

export default HomePage;
