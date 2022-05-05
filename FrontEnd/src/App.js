import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import SearchAppBar from "./Header/SearchAppBar";
import Header from "./Header/Header";
import Dresses from "./Categories/Dresses";
import Home from "./HomePage/Home";
import Outerwear from "./Categories/Outerwear";
import Tops from "./Categories/Tops";
import { Route, Routes } from "react-router";
import "react-alice-carousel/lib/alice-carousel.css";
import Lingerie from "./Categories/Lingerie";
import Bottoms from "./Categories/Bottoms";
import FAQ from "./pages/FAQ";
import SignIn from "./pages/SignIn";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import PaymentSuccess from "./pages/PaymentSuccess";
import Wishlist from "./pages/Wishlist";

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
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/outerwear" element={<Outerwear />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/bottoms" element={<Bottoms />} />
        <Route path="/Lingerie" element={<Lingerie />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
export default App;
