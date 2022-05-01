import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
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
      <ProductList />
      <Container>
        {lingerie.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Lingerie;
