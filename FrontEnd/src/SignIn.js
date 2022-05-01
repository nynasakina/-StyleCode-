import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Button, Container, Checkbox } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const SignIn = () => {
  const [value, setValue] = useState(0);
  const [details, setDetails] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSignUp =()=>{
    console.log("Clicked Signup")
  }

  return (
    <Box sx={{ width: "100%" }} textAlign="center">
      <Box paddingTop={2}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          textColor="#000000"
          indicatorColor="primary"
        >
          <Tab label="NEW CUSTOMER" />
          <Tab label="RETURNING CUSTOMER" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h5">Create an account</Typography>

        <form name="form">
          <TextField
            name="first name"
            required
            label="First Name"
            margin="normal"
            sx={{ width: "20%" }}
          ></TextField>
          <TextField
            name="last name"
            required
            label="Last Name"
            margin="normal"
            sx={{ width: "20%" }}
          ></TextField>
          <br />
          <TextField
            name="email"
            required
            type="email"
            label="Email"
            margin="normal"
            sx={{ width: "20%" }}
          ></TextField>

          <TextField
            name="password"
            required
            type="password"
            label="Password"
            margin="normal"
            sx={{ width: "20%" }}
          ></TextField>
          <br />
          <TextField
            name="address"
            required
            label="Address"
            margin="normal"
            sx={{ width: "20%" }}
          ></TextField>

          <TextField
            name="postcode"
            required
            label="Postal Code"
            margin="normal"
            sx={{ width: "20%" }}
          ></TextField>
          <br />
          <Button onClick={handleChangeSignUp}
            sx={{
              m: 2,
              //   minHeight: 40,
              minWidth: 280,
              color: "#ffffff",
              bgcolor: "#000000",
            }}
            type="submit"
            variant="contained"
          >
            CONFIRM & CONTINUE
          </Button>
          <br />
          <Typography variant="h9">
            By creating your account or signing in, you agree to our Terms and
            Conditions & Privacy Policy.
          </Typography>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form name="form">
          <Typography variant="h5">Log in to your account</Typography>
          <br />
          <TextField
            name="Email"
            required
            label="Email"
            margin="normal"
            sx={{ width: "20%" }}
          ></TextField>
          <br />
          <TextField
            name="Password"
            required
            label="Password"
            margin="normal"
            sx={{ width: "20%" }}
          ></TextField>
          <br />
          <Checkbox />
          <Typography variant="h8">Keep me signed in</Typography>
          <br />
          <Button
            sx={{
              m: 2,
              //   minHeight: 40,
              minWidth: 280,
              color: "#ffffff",
              bgcolor: "#000000",
            }}
            type="submit"
            variant="contained"
          >
            LOG IN{" "}
          </Button>
        </form>
      </TabPanel>
    </Box>
  );
};
export default SignIn;
