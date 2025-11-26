"use client";
import ImageContainer from "@/components/ImageContainer";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useParams } from "next/navigation";
import BedIcon from "@mui/icons-material/Bed";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddCallIcon from "@mui/icons-material/AddCall";

const rooms = [
  {
    type: "Standard",
    packages: [
      { hours: 1, price: 2500 },
      { hours: 3, price: 6500 },
    ],
  },
  {
    type: "Deluxe",
    packages: [
      { hours: 2, price: 5000 },
      { hours: 4, price: 9500 },
    ],
  },
  {
    type: "Suite",
    packages: [
      { hours: 3, price: 12000 },
      { hours: 6, price: 20000 },
    ],
  },
];

export default function page() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id;

  return (
    <Container
      sx={{
        my: 4,
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"} mr={2} my={4}>
        <Typography fontWeight={"bolder"} variant="h5">
          Property Details for ID: {id}
        </Typography>
        <Typography
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 3,
            pt: 0.4,
            p: 1,
            color: "white",
          }}
        >
          Rating: 7.8
        </Typography>
      </Stack>
      <ImageContainer />
      <Typography my={3} variant="h5">
        About this property
      </Typography>
      <p>
        Located in the heart of the city, this property offers stunning views
        and modern amenities. Guests can enjoy spacious rooms, a rooftop pool,
        and easy access to local attractions. Whether you're here for business
        or leisure, our property provides the perfect blend of comfort and
        convenience. Essential Facilities: Carinya Park in Gembrook offers a
        garden and terrace. Guests can relax in the outdoor seating area,
        picnic, and barbecue. Free on-site private parking is available.
        Comfortable Accommodations: The farm stay features one bedroom and a
        living room. Amenities include air-conditioning, balcony, spa bath,
        kitchen, fireplace, and garden views. Local Attractions: Located 52 mi
        from Essendon Fields Airport, nearby attractions include Dandenong
        Ranges Botanic Garden (22 mi) and Caribbean Gardens Chair Elevator (28
        mi). Hiking opportunities are available. Guest Satisfaction: Highly
        rated by guests for its comfortable accommodations and excellent
        facilities. Couples in particular like the location – they rated it 10.0
        for a two-person trip. Distance in property description is calculated
        using © OpenStreetMap
      </p>
      <Typography my={3} variant="h5">
        Available Rooms
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Room Type</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Hours</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Price</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) =>
              room.packages.map((pkg) => (
                <TableRow key={`${room.type}-${pkg.hours}`}>
                  <TableCell>{room.type}</TableCell>
                  <TableCell>{pkg.hours} hrs</TableCell>
                  <TableCell>Rs. {pkg.price}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Book
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          mt: 4,
          p: 3,
          display: "flex",
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <InfoOutlinedIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Need More Information?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={1}>
            If you have questions about room types, packages, or special
            requirements, our team is happy to help.
          </Typography>

          <Button variant="contained" color="primary" size="large">
            <AddCallIcon sx={{ mr: 1 }} />
            +94 77 123 4567
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
