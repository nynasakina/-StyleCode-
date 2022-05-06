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
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";

const Footer = () => {
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
                  href="/faq"
                  color="inherit"
                  style={{ textDecoration: "none" }}
                >
                  FAQ
                </Link>
              </Box>
              <br />
              <Box>
                <PhoneIcon fontSize="small" /> +65 65699723
                <br />
                <BusinessIcon fontSize="small" /> 79 Anson Rd, Level 20,
                Singapore 079906
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <strong>CONNECT WITH US</strong>
              </Box>
              <br />
              <Box>
                <Link href="www.facebook.com">
                  <FacebookIcon />
                </Link>

                <InstagramIcon />
                <TwitterIcon />
              </Box>
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
