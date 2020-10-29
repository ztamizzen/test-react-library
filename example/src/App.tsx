import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  createStyles,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  MyLocation as LocationIcon,
  Menu as MenuIcon,
  Restore as RestoreIcon,
} from "@material-ui/icons";
import { SjTheme, SjAppBar } from "sj-component-library";
import "sj-component-library/dist/index.css";

import SjFabs from "./SjFabs";
import SjRadios from "./SjRadios";
import SjSwitches from "./SjSwitches";
import SjButtons from "./SjButtons";
import SjCheckboxes from "./SjCheckboxes";

const useStyles = makeStyles(({ mixins, spacing }: Theme) =>
  createStyles({
    root: {
      color: "green",
    },
    group: {
      margin: spacing(4),
    },
    bottomNavigation: {
      bottom: 0,
      left: 0,
      right: 0,
      position: "fixed",
    },
    offset: mixins.toolbar,
    list: {
      width: 250,
    },
    fullWidth: {
      width: "auto",
    },
  })
);

const App = () => {
  const classes = useStyles();
  const [footerValue, setFooterValue] = useState<string>("recent");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ["Tab", "Shift"].includes((event as React.KeyboardEvent).key)
    ) {
      return;
    }
    setMenuOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={SjTheme}>
        <SjAppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">{footerValue}</Typography>
          </Toolbar>
        </SjAppBar>
        <div className={classes.offset} />
        <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <Container maxWidth="md" style={{ marginBottom: 76 }}>
          <SjButtons />
          <SjSwitches />
          <SjCheckboxes />
          <SjRadios />
          <SjFabs />
          <Typography component="p" variant="body1" paragraph={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptates fugit, a velit id nam molestiae obcaecati laborum
            voluptatibus tenetur iusto officiis harum neque necessitatibus
            minima repellendus voluptatem temporibus.
          </Typography>
          <Typography component="p" variant="body2" paragraph={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptates fugit, a velit id nam molestiae obcaecati laborum
            voluptatibus tenetur iusto officiis harum neque necessitatibus
            minima repellendus voluptatem temporibus.
          </Typography>
          <Typography component="p" variant="body1" paragraph={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptates fugit, a velit id nam molestiae obcaecati laborum
            voluptatibus tenetur iusto officiis harum neque necessitatibus
            minima repellendus voluptatem temporibus.
          </Typography>
          <Typography component="p" variant="body2" paragraph={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptates fugit, a velit id nam molestiae obcaecati laborum
            voluptatibus tenetur iusto officiis harum neque necessitatibus
            minima repellendus voluptatem temporibus.
          </Typography>
          <Typography component="p" variant="body1" paragraph={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptates fugit, a velit id nam molestiae obcaecati laborum
            voluptatibus tenetur iusto officiis harum neque necessitatibus
            minima repellendus voluptatem temporibus.
          </Typography>
          <Typography component="p" variant="body2" paragraph={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptates fugit, a velit id nam molestiae obcaecati laborum
            voluptatibus tenetur iusto officiis harum neque necessitatibus
            minima repellendus voluptatem temporibus.
          </Typography>
          <Typography component="p" variant="body1" paragraph={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptates fugit, a velit id nam molestiae obcaecati laborum
            voluptatibus tenetur iusto officiis harum neque necessitatibus
            minima repellendus voluptatem temporibus.
          </Typography>
          <Typography component="p" variant="body2" paragraph={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptates fugit, a velit id nam molestiae obcaecati laborum
            voluptatibus tenetur iusto officiis harum neque necessitatibus
            minima repellendus voluptatem temporibus.
          </Typography>
        </Container>
        <BottomNavigation
          value={footerValue}
          onChange={(_, newValue) => setFooterValue(newValue)}
          showLabels
          className={classes.bottomNavigation}
        >
          <BottomNavigationAction
            label="Recents"
            value="recent"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorite"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationIcon />}
          />
        </BottomNavigation>
      </ThemeProvider>
    </>
  );
};

export default App;
