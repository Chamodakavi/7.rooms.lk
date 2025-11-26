"use client";

import { useTheme } from "@mui/material/styles";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function NavBar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        height: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", fontSize: 24 }}
          >
            Rooms.LK
          </Typography>
          <Box display="flex" gap={4} alignItems="center">
            <Button
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                fontWeight: "bold",
              }}
            >
              Sign In
            </Button>
            <Button
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                fontWeight: "bold",
              }}
            >
              Register
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default NavBar;
