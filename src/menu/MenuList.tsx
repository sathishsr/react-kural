import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { filterMenuTitle } from "../Util/MenuDrawerDataHelper";
import { AppContext } from "../context/context";
import { Types } from "../context/reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
    },
    listSection: {
      backgroundColor: "inherit",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
    listSubHeaderRoot: {
      backgroundColor: "#E4E4E4",
      color: "#252525",
      /* To change the font, use the fontFamily rule */
    },
  })
);

export default function PinnedSubheaderList() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(AppContext);
  return (
    <List className={classes.root} subheader={<li />}>
      {filterMenuTitle().map((data) => (
        <li key={`section-${data?.number}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader
              classes={{ root: classes.listSubHeaderRoot }}
              disableSticky={false}
            >
              {data?.name}
            </ListSubheader>
            {data?.chapterGroup !== undefined &&
              data?.chapterGroup.map((item) => (
                <ListItem
                  key={`item-${item.name}`}
                  button
                  onClick={() => {
                    if (item) {
                      dispatch({ type: Types.Create, payload: { sectionDetail: item, selected: true } })
                    }
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
