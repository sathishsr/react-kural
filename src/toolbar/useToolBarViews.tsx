import {
  AppBar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useEffect, useMemo } from "react";
import { useToolBarStyles } from "./useToolBarStyles";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { ToolBarStrings } from "../constants/strings";
import {
  filterMenuTitle,
  filterSections,
} from "../Util/MenuDrawerDataHelper";
import PinnedSubheaderList from "../menu/MenuList";
import { AppContext } from "../context/context";

export const useToolBarViews = (): {
  mobileOpen: boolean;
  appBarView: React.ReactElement;
  sideMenu: React.ReactElement;
} => {
  const { state } = React.useContext(AppContext);

  const classes = useToolBarStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    setMobileOpen(!state.products.selected);
  }, [state])

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const appBarView = useMemo(() => renderAppBar(handleDrawerToggle, classes), [
    mobileOpen,
  ]);
  const sideMenu = useMemo(
    () => renderSideMenu(handleDrawerToggle, classes, mobileOpen),
    [mobileOpen]
  );

  return { mobileOpen, appBarView, sideMenu };
};

const renderAppBar = (handleDrawerToggle: () => void, classes: any) => {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {ToolBarStrings.titleHeader}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const renderSideMenu = (
  handleDrawerToggle: () => void,
  classes: any,
  mobileOpen: boolean
) => {
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer(classes)}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer(classes)}
        </Drawer>
      </Hidden>
    </nav>
  );
};

const drawer = (classes: any) => {
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <PinnedSubheaderList />
    </div>
  );
};
