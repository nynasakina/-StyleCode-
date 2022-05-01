import React from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bestseller } from "./bestsellerData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Typography } from "@mui/material";

const NewIn = () => {
  return (
    <>
      <Typography variant="h4">NEW IN ✨</Typography>

      <ImageList sx={{ width: 1010 }} cols={4} gap={10}>
        {bestseller.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              alt={item.name}
              loading="lazy"
              style={{ cursor: "pointer" }}
            />
            <ImageListItemBar
              title={<strong>{item.name}</strong>}
              subtitle={<em>{item.price}</em>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel> */}
    </>
  );
};

export default NewIn;
