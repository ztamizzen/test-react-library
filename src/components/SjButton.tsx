import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { SjColorPalette } from "../colors/sj";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: SjColorPalette.primary.main,
      borderBottom: `3px solid ${SjColorPalette.primary.dark}`,
      borderRadius: 3,
      borderTop: `3px solid ${SjColorPalette.primary.main}`,
      color: "white",
      padding: "10px 16px",
      textTransform: "inherit",
      "&:hover": {
        backgroundColor: SjColorPalette.primary.dark,
        borderBottomColor: SjColorPalette.primary.dark,
        borderTopColor: SjColorPalette.primary.dark,
        color: theme.palette.getContrastText(SjColorPalette.primary.dark),
      },
    },
  })
);

const SjButton = ({ children, ...props }: ButtonProps) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} color="default" {...props}>
      {children}
    </Button>
  );
};

export default SjButton;
