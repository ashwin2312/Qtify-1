import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import styles from "./AlbumCard.module.css";

export default function AlbumCard({ image, follows, title }) {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          gap: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={styles.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="159"
              image={image}
              alt="green iguana"
            />
          </CardActionArea>
          <Stack direction="row" spacing={1}>
            <Chip className={styles.chipStyle} label={`${follows} Follows`} />
          </Stack>
        </div>
      </Card>
      <div className={styles.titleStyle}>
        <Typography>{title}</Typography>
      </div>
    </div>
  );
}
