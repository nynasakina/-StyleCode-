import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import SearchAppBar from "./Header/SearchAppBar";
import Header from "./Header/Header";
import Images from "./Images";
import Dress from "./Categories/Dress";
import Home from "./Home";
import Accessories from "./Categories/Accessories";
import Outerwear from "./Categories/Outerwear";
import Top from "./Categories/Top";
import Swimwear from "./Categories/Swimwear";
import { Route, Routes } from "react-router";
import "react-alice-carousel/lib/alice-carousel.css";
import Lingerie from "./Categories/Lingerie";
import Shoes from "./Categories/Shoes";
import Footer from "./Footer";
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
    fontFamily: "Raleway,Roboto,Arial",
  },
  fontSize: 5,
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Header />
        <Images />
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dress" element={<Dress />} />
        <Route path="/outerwear" element={<Outerwear />} />
        <Route path="/top" element={<Top />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/Lingerie" element={<Lingerie />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Swimwear" element={<Swimwear />} />

      </Routes>
      <Footer/>
     
    </>
  );
}
export default App;
