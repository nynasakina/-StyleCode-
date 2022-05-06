import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Add } from "@mui/icons-material";
import Remove from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import StripeCheckout from "react-stripe-checkout";
import { removeFromCart } from "../Redux/cartRedux";
import axios from "axios";
import Img4 from "../Images/Img4.gif";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  border-radius: 20px;
  border-image: 1px solid black;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-weight: 300;
  font-size: 22px;
  word-spacing: 5px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  // font-weight: ${(props) => props.type === "total" && "500"};
  // font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // const [quantity, setQuantity] = useState();

  const handleRemoveFromCart = () => {
    // dispatch(removeFromCart(product));
    console.log("clicked removed");
  };

  const paymentHandler = () => {
    fetch("http://localhost:5001/paymenttest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  console.log(cart);
  return (
    <Wrapper>
      {Object.keys(cart.products).length === 0 ? (
        <>
          <Title>Your Shopping Cart is Empty!</Title>
          <center><img src={Img4} /></center>
        </>
      ) : (
        <>
          <Title>YOUR SHOPPING BAG</Title>
       
          <Bottom>
            <Info>
              {cart.products.map((product) => (
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>{product.name}</ProductName>
                      Color: {product.selectedColor}
                      <br />
                      Size: {product.selectedSize}
                      <ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      {/* <Add onClick={() => handleClickQuantity("add")} /> */}
                      {/* <ProductAmount>{product.quantity}</ProductAmount> */}
                      {/* <Remove onClick={() => handleClickQuantity("minus")} /> */}
                    </ProductAmountContainer>
                    <ProductPrice>
                      <Button onClick={handleRemoveFromCart}>Remove</Button>
                      {/* <ClearIcon
                    fontSize="small"
                    onClick={(product) => handleRemoveFromCart}

                  /> */}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
            </Info>

            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText> Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.50</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type="total">
                <SummaryItemText>
                  <b>Total</b>
                </SummaryItemText>
                <SummaryItemPrice>
                  <b>$ {cart.total + 5.5} </b>
                </SummaryItemPrice>
              </SummaryItem>

              <Button onClick={paymentHandler}>CHECKOUT NOW</Button>
              {/* </StripeCheckout> */}
            </Summary>
          </Bottom>
        </>
      )}
    </Wrapper>
  );
};

export default ShoppingCart;
