import { useTheme } from "@emotion/react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";

interface IntroCardProps {
  key: number;
  color: string;
  title: string;
  description: string;
}

function IntroCard({ color, title, description }: IntroCardProps) {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        boxShadow: 0,
        p: 2,
        display: "flex",
        flexDirection: "column",
        width: { xs: "90%" },
        alignItems: "flex-start",
        backgroundColor: "#fafafa",
        mt: { md: 3, xs: 1 },
      }}
    >
      <Box sx={{ mb: 2 }}>
        <AssignmentIcon fontSize="large" sx={{ color: color }} />
      </Box>
      <CardContent sx={{ p: 0 }}>
        <Typography fontWeight="bold" gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: 15 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default IntroCard;
