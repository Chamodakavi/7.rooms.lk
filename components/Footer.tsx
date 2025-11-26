"use client";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box>
      <Box sx={{ py: 2, textAlign: "center", backgroundColor: "#fafafa" }}>
        <Typography variant="body2" color="text.secondary">
          Rooms.LK is part of Rooms Holdings Pvt Ltd, Sri Lanka's leader in
          online travel and related services.
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1, display: "block" }}
        >
          © 2022–2025 Rooms.LK™. All rights reserved.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        sx={{ py: 2, backgroundColor: "#fafafa" }}
      >
        <img
          style={{
            width: "8%",
          }}
          src="/rooms.lk.png"
          alt=""
        />
      </Box>
    </Box>
  );
}

export default Footer;
