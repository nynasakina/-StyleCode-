import React, {useState, useEffect} from "react";
import ProductList from "./ProductList";
import styled from "styled-components";
import SingleProduct from "../components/SingleProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Top = () => {
  const [top, setTop] = useState([]);

  // Fetch all products
  const fetchPost = async () => {
    const res = await fetch("http://localhost:5001/tops");
    const data = await res.json();
    setTop(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <ProductList />
      <Container>
        {top.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Top;
