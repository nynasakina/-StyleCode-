import React, {useState, useEffect} from "react";
import ProductList from "../components/ProductList";
import styled from "styled-components";
import SingleProduct from "../components/SingleProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Outerwear = () => {
  const [outerwear, setOuterwear] = useState([]);
  const [filter, setFilters] = useState({});

  // Fetch all products
  const fetchPost = async () => {
    const res = await fetch("http://localhost:5001/outerwear");
    const data = await res.json();
    setOuterwear(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
       <ProductList filter={filter} setFilters={setFilters} />
      <Container>
        {Object.keys(filter).length === 0 || (filter.colour === "Colour" && filter.size === "Size") 
          ? outerwear.map((item) => {
              return <SingleProduct item={item} key={item.id} />;
            })
          : outerwear.map((item) => {
              if (item.color.indexOf(filter.colour) !== -1 || item.size.indexOf(filter.size) !== -1)  {
                return <SingleProduct item={item} key={item.id} />;
              }
            })}
      </Container>
    </>
  );
};

export default Outerwear;
