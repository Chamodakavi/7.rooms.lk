import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

function PropertCard() {
  const theme = useTheme();
  return (
    <Card sx={{ width: { md: "100%", xs: "80%", sm: "100%" } }}>
      <img
        style={{
          width: "100%",
        }}
        src="/generated-image blue.png"
        title="green iguana"
      />
      <CardContent sx={{ height: 38 }}>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species,
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Reserve</Button>
      </CardActions>
    </Card>
  );
}

export default PropertCard;
