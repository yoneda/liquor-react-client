import React from "react";
import { Link } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ALL_DRINKS = gql`
  query {
    allDrinks(category: COCKTAIL) {
      id
      name
      url
    }
  }
`;

const Home = props => {
  const { loading, error, data } = useQuery(ALL_DRINKS);
  if (loading) return <div>loading</div>;
  if (error) return <div>error:{error}</div>;
  return (
    <div>
      {data.allDrinks.map((drink, index) => (
        <div>
          <Link key={index} to={`/detail/${drink.id}`}>
            {drink.name}
          </Link>
          <br />
          <img src={`${drink.url}`} width="50" />
        </div>
      ))}
    </div>
  );
};

export default Home;
