import React from "react";
import { Link, Grid, Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="black"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box><strong>CUSTOMER SERVICE</strong></Box>
              <Box >
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box><strong>ABOUT US</strong></Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>OTHERS</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{sx: 5, sm:10}} pb={{xs:5, sm:0}}>
              Material UI Workshop 
          </Box>

        </Container>
      </Box>
    </div>
  );
};

export default Footer;
