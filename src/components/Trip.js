import React from "react";
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

import CountdownTimer from "./CountdownTimer";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Trip = ({ trip }) => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "primary.main", p: 2 }}>
      <Typography align="center" variant="h3" color="main.primary">
        Our past trips
      </Typography>
      <Divider color="main.primary" sx={{ m: 3 }} />
      <CountdownTimer />
      <Divider color="main.primary" sx={{ m: 3 }} />
      <Typography align="center" variant="h3" color="main.primary">
        Our past trips
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{ p: 1 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {months.map((month, index) => (
          <Grid item key={index} xs={2} md={4} lg={4}>
            <Item>
              <ImageList>
                <ImageListItem key="Subheader" cols={2}>
                  <ListSubheader component="div">{month}</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
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

const months = ["January", "February", "March", "April", "May", "June", "July"];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
];
