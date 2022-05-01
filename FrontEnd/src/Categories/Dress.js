import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import styled from "styled-components";
import SingleProduct from "../components/SingleProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Dress = () => {
  const [dress, setDress] = useState([]);

  // Fetch all products
  const fetchPost = async () => {
    const res = await fetch("http://localhost:5001/dress");
    const data = await res.json();
    setDress(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <ProductList />
      <Container>
        {dress.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Dress;



