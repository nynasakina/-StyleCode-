import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Remove from "@mui/icons-material/Remove";
import { Add } from "@mui/icons-material";
import { useParams } from "react-router";
import { addProduct } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
`;

const Image = styled.img`
  width: 60%;
  object-fit: cover;
  float: center;
  margin-left: 100px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Desc = styled.p`
  margin: 10px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
`;

const FilterBox = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: 1px solid black;
`;

// select option for size
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  color: white;
  background-color: black;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const ProductDetails = (props) => {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const dispatch = useDispatch();
  const handleClickQuantity = (type) => {
    if (type === "minus") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClickButton = () => {
    dispatch(
      // addProduct({ product, quantity, price: product.price * quantity })
      addProduct({ ...product, quantity, selectedColor, selectedSize })
    );
    console.log("added to cart!");
  };

  const fetchPost = async () => {
    const res = await fetch(
      `http://localhost:5001/productdetails/${productId}`
    );
    const data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Price>${product.price}</Price>
          <Desc>{product.desc}</Desc>

          <FilterBox>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor
                  color={c}
                  key={c}
                  onClick={() => setSelectedColor(c)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSelectedSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
            <AmountContainer>

              <Remove onClick={() => handleClickQuantity("minus")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleClickQuantity("add")} />
            </AmountContainer>
          </FilterBox>
          <AddContainer>
        
            <Button onClick={handleClickButton}>ADD TO BAG</Button>

            {/* <Button onClick={handleClickButton}>CHECKOUT NOW</Button> */}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </>
  );
};

export default ProductDetails;
