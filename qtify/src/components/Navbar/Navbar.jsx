import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import useDimension from "../../hooks/general/useDimension";
import { Collapse, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { TransitionGroup } from "react-transition-group";

function Navbar({ searchData }) {
  const { width } = useDimension();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width > 768) setOpen(false);
  }, [width]);
  return (
    <nav className={styles.navbar}>
      {width <= 768 && (
        <Stack
          className={styles.mobile_navbar}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <Logo />
          </Link>
          {!open && (
            <MenuIcon
              className={styles.mobile_icon}
              onClick={() => setOpen(true)}
            />
          )}
          {open && (
            <ClearIcon
              className={styles.mobile_icon}
              onClick={() => setOpen(false)}
            />
          )}
        </Stack>
      )}
      <TransitionGroup>
        {open && (
          <Collapse in={open}>
            <Stack className={styles.mobile_options}>
              <Search
                placeholder="Search a song of your choice"
                searchData={searchData}
              />
              <Button>Give Feedback</Button>
            </Stack>
          </Collapse>
        )}
      </TransitionGroup>

      {width > 768 && (
        <>
          <Link to="/">
            <Logo />
          </Link>
          <Search
            placeholder="Search a song of your choice"
            searchData={searchData}
          />
          <Button>Give Feedback</Button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
