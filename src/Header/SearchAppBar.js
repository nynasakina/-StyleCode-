import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router";

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
  let navigate = useNavigate();
  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="h7"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOGO HERE
          </Typography>
          {/* <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              LINK
            </Typography>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ flexGrow: 5, display: { xs: "none", sm: "block" } }}
            >
              LINK
            </Typography> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ minWidth: 350 }}
            />
          </Search>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1, ml: 1 }}
          >
            <PersonIcon />
            <AddShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* </Box> */}
    </>
  );
};

export default SearchAppBar;
