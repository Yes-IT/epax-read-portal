import * as React from 'react';
import { useRef, useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from "prop-types";
import PushPinIcon from '@mui/icons-material/PushPin';
import IosShareIcon from '@mui/icons-material/IosShare';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import AddCommentIcon from '@mui/icons-material/AddComment';
import CardElementMenu from './CardElementMenu';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Evaluate from './Evaulation';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function MyCardElement({ index, image, handleRemove, show }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef();

  return (

    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      
    >
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <CardElementMenu />
        }
        //title="Shrimp and Chorizo Paella"
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
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="settings">
          <ThumbUpOffAltIcon  />
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
        {/* <IconButton aria-label="settings">
            <PushPinIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <IosShareIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <LoyaltyIcon />
          </IconButton> */}
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
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