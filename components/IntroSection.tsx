"use client";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

import IntroCard from "./IntroCard";

const details = [
  {
    id: 1,
    title: "Book now, pay at the property",
    description: "FREE cancellation on most rooms",
    iconColor: "#ffa726",
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description: "We're here to help, anytime",
    iconColor: "#66bb6a",
  },
  {
    id: 3,
    title: "Best Price Guarantee",
    description: "Find a lower price? We'll match it",
    iconColor: "#29b6f6",
  },
  {
    id: 4,
    title: "Wide Range of Properties",
    description: "From budget to luxury, we have it all",
    iconColor: "#ab47bc",
  },
];

function IntroSection() {
  const theme = useTheme();
  return (
    <Container sx={{ my: 5 }}>
      <Box>
        <Typography
          fontSize={20}
          color={theme.palette.secondary.main}
          fontWeight="bold"
        >
          Rooms.LK is your trusted platform for instant booking accommodations
          in Sri Lanka.
        </Typography>
      </Box>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        justifyContent="center"
        gap={3}
      >
        {details.map((detail) => (
          <IntroCard
            key={detail.id}
            color={detail.iconColor}
            title={detail.title}
            description={detail.description}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default IntroSection;
