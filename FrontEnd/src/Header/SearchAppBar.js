import * as React from "react";
import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Typography, Link } from "@mui/material";
import { Navigate, useNavigate } from "react-router";
import { FavoriteOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  marginLeft: 20,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
}));

const SearchAppBar = () => {
  const [allProduct, setAllProduct] = useState([]);

  let navigate = useNavigate();
  const handleChangeCart = () => {
    navigate("/shoppingcart");
  };

  const handleChangeFav = () => {
    navigate("/wishlist");
  };

  //FETCH ALL PRODUCTS
  const fetchPost = async () => {
    const res = await fetch("http://localhost:5001/seed");
    const data = await res.json();
    setAllProduct(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // LIST OF ALL PRODUCTS
  const allProducts = allProduct.map((data, index) => {
    return data.name;
  });

  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link
            href="/"
            color="inherit"
            style={{ textDecoration: "none" }}
            sx={{ flexGrow: 1 }}
          >
            <img
              src="https://i.ibb.co/nRWCGLc/Stylecode.png"
              alt="STYLECODE"
              width="200"
              height="50"
            />{" "}
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             
              sx={{ minWidth: 350 }}
            
            />
 
          </Search>

          <AddShoppingCartIcon onClick={handleChangeCart} />
          <FavoriteOutlined onClick={handleChangeFav}/>
        </Toolbar>
      </AppBar>
      {/* </Box> */}
    </>
  );
};

export default SearchAppBar;
