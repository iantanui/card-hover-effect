// src/components/Card.js
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Card.css";
import landscape1 from "../assets/landscape-1.png";
import landscape2 from "../assets/landscape-2.png";
import landscape3 from "../assets/landscape-3.png";

const cardData = [
  {
    title: "The Great Path",
    subheader: "Vancouver Mountains, Canada",
    image: landscape1,
    description:
      "This is the description for Card 1. It can contain more details about the card.",
    paragraph: "This is the content for Card 1",
  },
  {
    title: "Starry Night",
    subheader: "Poon Hill, Nepal",
    image: landscape2,
    description:
      "This is the description for Card 2. It can contain more details about the card.",
    paragraph: "This is the content for Card 2.",
    /*This impressive paella is a perfect party dish and a fun meal to
      cook together with your guests. Add 1 cup of frozen peas along
      with the mussels, if you like.*/
  },
  {
    title: "Path of Peace",
    subheader: "Bojcin Forest, Serbia",
    image: landscape3,
    description:
      "This is the description for Card 3. It can contain more details about the card.",
    paragraph: "This is the content for Card 3.",
  },
];

function Cards() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="cards">
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: isMobile ? 345 : 600,
            borderRadius: 10,
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="card"
        >
          <div className="card-overlay">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {card.title[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.title}
              subheader={card.subheader}
            />

            <CardContent>
              <Typography variant="body2" color="white">
                {card.description}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph></Typography>
                <Typography paragraph>{card.paragraph}</Typography>
              </CardContent>
            </Collapse>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Cards;