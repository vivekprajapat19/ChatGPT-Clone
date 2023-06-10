import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Paper
      sx={{ marginTop: "calc(10% + 60px)", bottom: 0, backgroundColor: "grey" }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
        varient="h4"
        fontWeight="bold"
          sx={{
            color: "#0f2891",
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          {/* <Link href="/">
            <Image priority src="/Logo.svg" width={75} height={30} />
          </Link> */}
          Vivek Prajapat
        </Box>

        <Box
          sx={{
            opacity: "0.5",
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography  variant="h8" color="initial">
            Copyright @{year}. ChatGPT Clone all right reserved.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;