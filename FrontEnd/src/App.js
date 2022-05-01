import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import SearchAppBar from "./Header/SearchAppBar";
import Header from "./Header/Header";
import Dress from "./Categories/Dress";
import Home from "./HomePage/Home";
import Accessories from "./Categories/Accessories";
import Outerwear from "./Categories/Outerwear";
import Top from "./Categories/Top";
import { Route, Routes } from "react-router";
import "react-alice-carousel/lib/alice-carousel.css";
import Lingerie from "./Categories/Lingerie";
import Bottom from "./Categories/Bottom";
import ContactUs from "./CustService/ContactUs";
import FAQ from "./CustService/FAQ";
import SignIn from "./SignIn";
import ProductDetails from "./ProductDetails";
import ShoppingCart from "./ShoppingCart";
import SingleProduct from "./components/SingleProduct";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    FontFamily: "Apercu,Roboto,Arial",
  },
  fontSize: 5,
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Header />
      
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dress" element={<Dress />} />
        <Route path="/outerwear" element={<Outerwear />} />
        <Route path="/top" element={<Top />} />
        <Route path="/bottom" element={<Bottom />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/Lingerie" element={<Lingerie />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />


      </Routes>
    </>
  );
}
export default App;
