import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;

//For Products
const Product = styled.div`
display:flex;
justify-content:space-between;
`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:20%;
`;
const Details = styled.div`
`;
const ProductName = styled.span`
`;
const ProductColour = styled.div`
`;
const ProductSize = styled.span`
`;
const PriceDetail = styled.span`
flex:1;
`;

const ShoppingCart = () => {
  return (
    <>
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail></ProductDetail>
              <Image src="https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw1b393c63/1_front_750/00383198-01.jpg" />
              <Details>
                <ProductName>Product Name here</ProductName>
                <ProductColour>Product colour here</ProductColour>
                <ProductSize>Product Name here</ProductSize>
              </Details>
              <PriceDetail>$10</PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default ShoppingCart;
