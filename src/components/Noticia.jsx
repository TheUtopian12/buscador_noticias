import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";
const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            height={"250"}
            component="img"
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
          />
        )}

        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body">{description}</Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            color={"secondary"}
            width={"100%"}
            textAlign="center"
          >
            Leer noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
