import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DescriptionIcon from "@mui/icons-material/Description";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinIcon from '@mui/icons-material/PushPin';
import IosShareIcon from '@mui/icons-material/IosShare';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentsIcon from '@mui/icons-material/Notes';
import VotesIcon from '@mui/icons-material/ThumbsUpDown';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AllInboxIcon from '@mui/icons-material/AllInbox';
export const TypeIcon = (props) => {
 // if (props.droppable) {
 //   return <FolderIcon />;
 // }

  switch (props.fileType) {
    case "image":
      return <ImageIcon />;
    case "csv":
      return <ListAltIcon />;
    case "text":
      return <DescriptionIcon />;
    case "favs":
      return <FavoriteIcon />;
    case "shares":
      return <ShareIcon />;
    case "more":
      return <ExpandMoreIcon />;
    case "vmore":
      return <MoreVertIcon />;
    case "pins":
      return <PushPinIcon />;
    case "pub":
      return <IosShareIcon />;
    case "bookmark":
      return <LoyaltyIcon />;
    case "thumbup":
      return <ThumbUpOffAltIcon />;
    case "thumbdown":
      return <ThumbDownOffAltIcon />;
    case "comments":
      return <CommentsIcon />;
    case "votes":
        return <VotesIcon />;
    case "trash":
        return <DeleteSweepIcon />;
    case "inbox":
      return <AllInboxIcon />;
    default:
      return null;
  }
};
