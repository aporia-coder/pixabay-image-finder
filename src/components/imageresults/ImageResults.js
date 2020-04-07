import React, { useState } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Dialog,
  Button,
} from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

export const ImageResults = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const handleOpen = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  return (
    <>
      <GridList cols={3}>
        {images.map((img) => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt="" />
            <GridListTileBar
              title={img.tags}
              subtitle={
                <span>
                  by: <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                  <ZoomInIcon style={{ fill: "#FFF" }} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog open={open}>
        <img src={currentImg} alt="" style={{ width: "100%" }} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};
