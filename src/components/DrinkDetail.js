import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_DRINK = gql`
  query drink($id: ID!) {
    Drink(id: $id) {
      id
      name
      url
      category
    }
  }
`;

const DrinkDetail = props => {
  const { id } = props;
  const { loading, error, data } = useQuery(GET_DRINK, {
    variables: { id }
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error:{error}</div>;
  return(
    <div>
      {
        data.Drink.name
      }
    </div>
  )
};

export default DrinkDetail;
