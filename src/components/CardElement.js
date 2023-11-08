import * as React from 'react';
import { useRef } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from "prop-types";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CardElementMenu from './CardElementMenu';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Evaluate from './Evaulation';

function MyCardElement({ image, show }) {
  const [expanded] = React.useState(false);

  const imageRef = useRef();

  return (
    <div className="relative">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <CardElementMenu />
          }
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          src={image}
          alt="Paella dish"
          ref={imageRef}
          onClick={show}
          width="100%"
          height="auto"
          crossOrigin="anonymous"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="settings">
            <ThumbUpOffAltIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <ThumbDownOffAltIcon />
          </IconButton>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <QrCodeIcon />
          </IconButton>
          <Evaluate />
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

MyCardElement.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.string,
  handleRemove: PropTypes.func,
};

export default MyCardElement;