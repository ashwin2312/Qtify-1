import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function AlbumCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </CardActionArea>
        <Stack direction="row" spacing={1}>
          <Chip label="Chip Filled" />
        </Stack>
      </div>
      <div>
        <p>Album Name</p>
      </div>
    </Card>
  );
}
