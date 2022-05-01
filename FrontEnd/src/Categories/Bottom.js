import React, {useEffect, useState} from "react";
import ProductList from "./ProductList";
import styled from "styled-components";
import SingleProduct from "../components/SingleProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Bottom = () => {
  const [bottom, setBottom] = useState([]);

  // Fetch all products
  const fetchPost = async () => {
    const res = await fetch("http://localhost:5001/bottoms");
    const data = await res.json();
    setBottom(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <ProductList />
      <Container>
        {bottom.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Bottom;
