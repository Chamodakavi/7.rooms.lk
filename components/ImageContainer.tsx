import { Box, Grid, Stack } from "@mui/material";
import React from "react";

function ImageContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <img
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "2%",
            }}
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/154543781.jpg?k=868ff54aa25ef6a79bf336d10a70cbb0460e9200740fc7686e3f5b050bd41af0&o="
            alt=""
          />
        </Grid>
        <Grid size={4}>
          <Stack direction="column" spacing={0.8}>
            <Grid size={12}>
              <img
                style={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "2%",
                }}
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/154543781.jpg?k=868ff54aa25ef6a79bf336d10a70cbb0460e9200740fc7686e3f5b050bd41af0&o="
                alt=""
              />
            </Grid>
            <Grid size={12}>
              <img
                style={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "2%",
                }}
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/154543781.jpg?k=868ff54aa25ef6a79bf336d10a70cbb0460e9200740fc7686e3f5b050bd41af0&o="
                alt=""
              />
            </Grid>
          </Stack>
        </Grid>
        <Grid size={4}>
          <img
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "2%",
            }}
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/154543781.jpg?k=868ff54aa25ef6a79bf336d10a70cbb0460e9200740fc7686e3f5b050bd41af0&o="
            alt=""
          />
        </Grid>
        <Grid size={4}>
          <img
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "2%",
            }}
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/154543781.jpg?k=868ff54aa25ef6a79bf336d10a70cbb0460e9200740fc7686e3f5b050bd41af0&o="
            alt=""
          />
        </Grid>
        <Grid size={4}>
          <img
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "2%",
            }}
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/154543781.jpg?k=868ff54aa25ef6a79bf336d10a70cbb0460e9200740fc7686e3f5b050bd41af0&o="
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageContainer;
