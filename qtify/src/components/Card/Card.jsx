import React from "react";
import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import styles from "./Card.module.css";

const StyledChip = styled(Chip)`
  /* border-radius: 10px;
  padding-top: 4px;
  padding-right: 8px;
  padding-bottom: 4px;
  padding-left: 8px;
  background: #121212; */
`;

function Card({ id, imgUrl, follows, title }) {
  return (
    <Stack className={styles.card_wrapper} rowGap={0.75}>
      <MuiCard className={styles.card}>
        <CardActionArea>
          <CardMedia component="img" height="170" image={imgUrl} alt={title} />
          <CardContent className={styles.card_content}>
            <StyledChip
              className={styles.card_follow}
              label={
                <Typography className={styles.card_follow_text}>
                  {follows} Follows
                </Typography>
              }
              variant="filled"
            />
          </CardContent>
        </CardActionArea>
      </MuiCard>
      <Typography className={styles.card_title}>{title}</Typography>
    </Stack>
  );
}

export default Card;
