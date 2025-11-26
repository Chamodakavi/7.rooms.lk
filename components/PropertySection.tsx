"use client";
import PropertCard from "./PropertCard";
import { Container, Grid, Typography, useTheme } from "@mui/material";

interface PropertySectionProps {
  properties?: Array<any>;
  currentPage?: number;
}

function PropertySection({
  currentPage = 1,
  properties = [],
}: PropertySectionProps) {
  const theme = useTheme();

  let startIndex = 0;
  let pageSize = 8;

  if (currentPage === 1) {
    startIndex = 0;
    pageSize = 8;
  } else {
    startIndex = 4 + (currentPage - 2) * 12; // skip first 4 + 12 items per subsequent page
    pageSize = 12;
  }

  const displayedProperties = properties.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <Container sx={{ my: 4 }}>
      <Typography
        fontWeight={"bolder"}
        my={2}
        variant="h4"
        color={theme.palette.secondary.main}
      >
        Featured Properties
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
      >
        {displayedProperties.map((property) => (
          <Grid key={property.id} size={{ xs: 1, sm: 1, md: 1 }}>
            <PropertCard {...property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PropertySection;
