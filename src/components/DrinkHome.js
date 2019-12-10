import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_DRINKS = gql`
  query {
    allDrinks(category: COCKTAIL) {
      id
      name
      url
    }
  }
`;

const DrinkHome = props => {
  const { loading, error, data } = useQuery(GET_DRINKS);
  if (loading) return <div>loading</div>;
  if (error) return <div>error:{error}</div>;
  return (
    <div>
      {data.allDrinks.map(drink => (
        <div>
          <div>{drink.name}</div>
          <img src={`${drink.url}`} width="50" />
        </div>
      ))}
    </div>
  );
};

export default DrinkHome;
