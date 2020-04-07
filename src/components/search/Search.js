import React, { useState, useEffect } from "react";
import { ImageResults } from "../imageresults/ImageResults";
import { TextField, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

export const Search = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(5);
  const [images, setImages] = useState([]);

  const [api, setApi] = useState({
    url: "https://pixabay.com/api/",
    key: "15911903-e5403cc9600c334ca867c09f6",
  });

  useEffect(() => {
    if (text === "") {
      setImages([]);
    } else {
      axios
        .get(
          `${api.url}/?key=${api.key}&q=${text}&image_type=photo&per_page=${amount}&safesearch=true`,
        )
        .then((res) => setImages(res.data.hits))
        .catch((err) => console.log(err));
    }
  }, [text]);

  const useStyles = makeStyles({
    spacing: {
      margin: "1rem 0",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.spacing}
        label="Search Images"
        fullWidth={true}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        className={classes.spacing}
        select
        label="Select"
        fullWidth={true}
        value={amount}
        helperText="Select amount of images to be displayed"
        onChange={(e) => setAmount(e.target.value)}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </TextField>
      {images.length > 0 && <ImageResults images={images} />}
    </div>
  );
};
