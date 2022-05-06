import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import styled from "styled-components";
import SingleProduct from "../components/SingleProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Lingerie = () => {
  const [lingerie, setLingerie] = useState([]);
  const [filter, setFilters] = useState({});

  // Fetch all products
  const fetchPost = async () => {
    const res = await fetch("http://localhost:5001/lingerie");
    const data = await res.json();
    setLingerie(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <ProductList filter={filter} setFilters={setFilters} />
      <Container>
        {Object.keys(filter).length === 0 || (filter.colour === "Colour" && filter.size === "Size") 
          ? lingerie.map((item) => {
              return <SingleProduct item={item} key={item.id} />;
            })
          : lingerie.map((item) => {
              if (item.color.indexOf(filter.colour) !== -1 || item.size.indexOf(filter.size) !== -1)  {
                return <SingleProduct item={item} key={item.id} />;
              }
            })}
      </Container>
    </>
  );
};

export default Lingerie;
