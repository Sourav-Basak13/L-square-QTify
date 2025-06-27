import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Faqs.module.css";

function Faqs() {
  return (
    <Stack className={styles.faqs} rowGap={2.5}>
      <Typography component="span" className={styles.faqs_title}>
        FAQs
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={styles.accordion_summary}
        >
          <Typography component="span" className={styles.accordion_text}>
            Is QTify free to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_text}>
          Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className={styles.accordion_summary}
        >
          <Typography component="span" className={styles.accordion_text}>
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_text}>
          Sorry, unfortunately we don't provide the service to download any
          songs.
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default Faqs;
