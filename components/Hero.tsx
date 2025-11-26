"use client";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function Hero() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        mt: 5,
      }}
    >
      <Stack direction={"row"}>
        <Box width={{ xs: "100%", sm: "40%", md: "40%" }}>
          <Typography
            fontSize={40}
            color={theme.palette.primary.main}
            fontWeight="bold"
          >
            Save up to 40% <br /> with Black Friday <br />
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "58px",
                color: "#273b56ff",
              }}
            >
              Deals !
            </span>
          </Typography>

          <Button size="large" variant="contained" sx={{ mt: 4 }}>
            Explore Deals
          </Button>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "300px",
            borderRadius: 4,
            overflow: "hidden",
            ml: 4,
            display: { xs: "none", sm: "block", md: "block" },
          }}
        >
          <img
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            src="https://encounterevents.uk/wp-content/uploads/2020/05/book-now.jpg"
            alt=""
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default Hero;
