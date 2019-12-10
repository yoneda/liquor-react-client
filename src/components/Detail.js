import React from "react";
import { Link } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_DRINK = gql`
  query drink($id: ID!) {
    Drink(id: $id) {
      id
      name
      url
      category
      instructions
    }
  }
`;

const Detail = props => {
  const { id } = props;
  const { loading, error, data } = useQuery(GET_DRINK, {
    variables: { id }
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error:{error}</div>;
  const drink = data.Drink;
  return (
    <div>
      {
        <div>
          <img src={`${drink.url}`} wdith="200" />
          <h4>title</h4>
          <div>{drink.name}</div>
          <h4>category</h4>
          <div>{drink.category}</div><br />
          <div><Link to="/">back to home</Link></div>
          <br />
        </div>
      }
    </div>
  );
};

export default Detail;
