import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ALL_DRINKS = gql`
  query drinks($category: DrinkCategory) {
    allDrinks(category: $category) {
      id
      name
      url
    }
  }
`;

const Home = props => {
  const [category, setCategory] = useState("COCKTAIL");
  const { loading, error, data } = useQuery(ALL_DRINKS, {
    variables: { category }
  });
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  if (error) return <div>error:{error}</div>;
  return (
    <div>
      <h3>Category</h3>
      <button onClick={event => setCategory("COCKTAIL")}>cocktail</button>
      <button onClick={event => setCategory("BEER")}>beer</button>
      <button onClick={event => setCategory("COFFEE")}>coffee</button>
      <button onClick={event => setCategory("OTHER")}>others</button>
      <h3>List</h3>
      {
        loading ?  <div>loading</div> :
        data.allDrinks.map((drink, index) => (
          <div>
            <Link key={index} to={`/detail/${drink.id}`}>
              {drink.name}
            </Link>
            <br />
            <img src={`${drink.url}`} width="100" />
          </div>
        ))
      }
    </div>
  );
};

export default Home;
