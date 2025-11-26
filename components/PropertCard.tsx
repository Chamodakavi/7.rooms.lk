import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface p {
  id: number;
}

function PropertCard({ id }: p) {
  const theme = useTheme();
  const router = useRouter();

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
        <Button size="large" onClick={() => router.push(`/property/${id}`)}>
          Reserve
        </Button>
      </CardActions>
    </Card>
  );
}

export default PropertCard;
