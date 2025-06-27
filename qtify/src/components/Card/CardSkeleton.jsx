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
  Skeleton,
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

function CardSkeleton() {
  return (
    <Stack className={styles.card_wrapper} rowGap={0.75}>
      <MuiCard className={styles.card}>
        <CardActionArea>
          {/* <CardMedia component="img" height="170" image={imgUrl} alt={title} /> */}
          <Skeleton variant="rounded" height={170} width={159} />
          <CardContent
            className={`${styles.card_content} ${styles.card_content_skeleton}`}
          >
            <StyledChip
              className={`${styles.card_follow} ${styles.card_follow_skeleton}`}
              label={<Skeleton variant="text" width={50} />}
              variant="filled"
            />
          </CardContent>
        </CardActionArea>
      </MuiCard>
      <Skeleton variant="text" className={styles.card_title} width={80} />
    </Stack>
  );
}

export default CardSkeleton;
