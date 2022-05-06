import {
  Favorite,
  FavoriteBorderOutlined,
  LaunchOutlined,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Wishlist from "../pages/Wishlist";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Image = styled.img`
  height: 100%;
  z-index: 2;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${Image} {
    background-color: #ffffff;
    transform: scale(0.9);
  }
`;

const Details = styled.span`
  bottom: 0px;
  margin: 10px;
  padding: 3px;
  color: #000000;
  background-color: #eeeeef;
  width: 250px;
  position: absolute;
  opacity: 1;
  text-align: center;
  font-size: 14px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #ffffff;
    transform: scale(1.5);
  }
`;
const SingleProduct = ({ item, setFavorite, favorite }) => {
  // const params = useParams();
  const [allProducts, setAllProducts] = useState([]);

  const fetchPost = async () => {
    const res = await fetch("http://localhost:5001/product/all");
    const data = await res.json();
    setAllProducts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const addFavorites = (e) => {
    e.preventDefault();

    if (favorite.indexOf(item.name) === -1) {
      setFavorite((prevState) => {
        return [...prevState, item.name];
      });
    }  };

  return (
    <Container>
      <Image src={`${item.img}`} alt={item.name} />

      {/* <Image>
        <img src={`${item.img}`} alt={item.id} />
      </Image> */}
      <Info>
        <Icon>
          <Link to={`/productdetails/${item._id}`}>
            <LaunchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined onClick={addFavorites} />
        </Icon>
        <Details>
          <strong>{item.name}</strong>
          <br />${item.price}
        </Details>
      </Info>
    </Container>
  );
};

export default SingleProduct;
