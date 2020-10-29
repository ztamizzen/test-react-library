import React from "react";
import { createStyles, Fab, FabProps, makeStyles } from "@material-ui/core";
import { SjColorPalette } from "../colors/sj";

/* const SjFabStyles = {
  root: {
    backgroundColor: SjColorPalette.primary.main,
    color: SjColorPalette.primary.text,
  },
  primary: {
    backgroundColor: SjColorPalette.primary.main,
    color: SjColorPalette.primary.text,
  },
  secondary: {
    backgroundColor: SjColorPalette.secondary.main,
    color: SjColorPalette.secondary.text,
  },
};

export default withStyles(SjFabStyles)(Fab);
 */
const useStyles = makeStyles(() => createStyles({
  root: {
    backgroundColor: SjColorPalette.primary.main,
    color: SjColorPalette.primary.text,
    "&:hover": {
      backgroundColor: SjColorPalette.primary.dark,
    },
  },
}));

const SjFab = (props: FabProps) => {
  const classes = useStyles();
  return <Fab className={classes.root} color="default" {...props} />;
};

export default SjFab;
