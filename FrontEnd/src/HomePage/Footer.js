import React from "react";
import {
  Link,
  Grid,
  Box,
  Container,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const Footer = () => {
  // const style = {
  //   backgroundColor: "#F8F8F8",
  //   borderTop: "10px solid #ff0099",
  //   position: "fixed",
  //   left: "0",
  //   bottom: "0",
  //   height: "200px",
  //   width: "100%"
  // };

  return (
    <div>
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 3, sm: 5 }}
        bgcolor="black"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box>
                <strong>CUSTOMER SERVICE</strong>
              </Box>
              <br />
              <Box>
                <Link
                  href="/contactus"
                  color="inherit"
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </Link>
              </Box>
              <Box>
                <Link
                  href="/faq"
                  color="inherit"
                  style={{ textDecoration: "none" }}
                >
                  FAQ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <strong>CONNECT WITH US</strong>
              </Box>
              <br />
              <Box>SOCMED</Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <strong>New To StyleCode?</strong>
                <br />
                <br />
                <Typography variant="h7">
                  Get latest fashion news and product launches just by
                  subscribing to our newsletter.
                </Typography>
                <br />
                <br />
                <input placeholder="Email here"></input>
                <button color="#eeeeee">Submit</button>
              </Box>
              <Box></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
