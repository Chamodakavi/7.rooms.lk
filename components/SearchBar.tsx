"use client";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const trendingDestinations = [
  { city: "Malabe", country: "Colombo" },
  { city: "Athurugiriya", country: "Colombo" },
  { city: "Rajagiriya", country: "Colombo" },
  { city: "Hikkaduwa", country: "Galle" },
  { city: "Horana", country: "Kaluthara" },
];

function SearchBar() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [value, setValue] = useState("");

  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          border: "3px solid",
          borderColor: theme.palette.primary.main,
          borderRadius: 4,
          p: 1,
          mt: 3,
          justifyContent: "space-evenly",
          pt: 2,
        }}
      >
        <TextField
          sx={{
            width: { md: "50%", sm: "100%", xs: "100%" },
            mb: { xs: 2, sm: 2, md: 0 },
          }}
          id="outlined-basic"
          label="Where are you going ?"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <Box
          display={{ sm: "block", md: "flex" }}
          sx={{
            mb: { sm: 2, xs: 2, md: 0 },
          }}
        >
          <TextField
            sx={{
              width: { md: "60%", xs: "100%", sm: "100%" },
            }}
            label="Check-in date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <Typography sx={{ mx: 1 }}>—</Typography>
          <TextField
            sx={{ width: { md: "60%", xs: "100%", sm: "100%" } }}
            label="Check-out date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        <Button variant="contained">Search</Button>
      </Box>
      {showSuggestions && (
        <Box
          sx={{
            position: "relative",
            top: "-15px",
            left: "4rem",
            right: 0,
            bgcolor: "#fff",
            boxShadow: 2,
            borderRadius: 2,
            zIndex: 1000,
            p: 2,
            width: "40%",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <Typography fontWeight="bold" mb={1}>
            Trending destinations
          </Typography>
          {trendingDestinations.map((item) => (
            <Box
              key={item.city}
              sx={{
                display: "flex",
                alignItems: "center",
                py: 1,
                cursor: "pointer",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
              onMouseDown={() => {
                setValue(item.city);
                setShowSuggestions(false);
              }}
            >
              <Box>
                <Typography fontWeight="bold">{item.city}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.country}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default SearchBar;
