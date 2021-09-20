import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Grid,
  ImageList,
  ImageListItem,
  ListSubheader,
  Typography,
  Divider,
} from "@mui/material";
import { trips } from "../data/trips";

import CountdownTimer from "./CountdownTimer";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Trip = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "primary.main", p: 2 }}>
      <Typography align="center" variant="h3" color="main.primary">
        Trust Is Everything {">:)"}
      </Typography>
      <Divider color="main.primary" sx={{ m: 3 }} />
      <CountdownTimer />
      <Divider color="main.primary" sx={{ m: 3 }} />
      <Typography align="center" variant="h3" color="main.primary">
        Best Memories
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ p: 1 }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {trips.map((trip, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
            <Item>
              <ImageList>
                <ImageListItem cols={2}>
                  <ListSubheader component="div">{trip.city}</ListSubheader>
                </ImageListItem>
                {trip.images.map((image, index) => (
                  <ImageListItem key={index}>
                    <Image src={image.img} alt={image.title} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Trip;
