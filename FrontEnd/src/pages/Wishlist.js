import React from "react";
import styled from "styled-components";
import fav from "../Images/fav.gif";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Wishlist = () => {
  return (
    <>
      <Wrapper>
        <center>
          <Title> Your Wish List Is Empty!</Title>
          <br />
          <img src={fav} />
        </center>
      </Wrapper>
    </>
  );
};

export default Wishlist;
