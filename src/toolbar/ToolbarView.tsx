import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { useToolBarViews } from "./useToolBarViews";
import { useToolBarStyles } from "./useToolBarStyles";
import '../App.css';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const classes = useToolBarStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function ToolBarView(props: Props) {
  const { children } = props;
  const { appBarView, sideMenu } = useToolBarViews();

  const renderScrollToTopView = (props: Props) => {
    return (
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {appBarView}
      {sideMenu}
      <Toolbar id="back-to-top-anchor" />
      <Container disableGutters maxWidth={false} className="container">{children}</Container>
      {renderScrollToTopView(props)}
    </React.Fragment>
  );
}
