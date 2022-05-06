import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useState } from "react";

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = ({ filter, setFilters }) => {
  const location = useLocation();
  const category = location.pathname.split("/")[1].toLowerCase();

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="colour" onChange={handleFilters}>
            <Option>Colour</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>pink</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>Size</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter></Filter>
      </FilterContainer>
    </>
  );
};

export default ProductList;
