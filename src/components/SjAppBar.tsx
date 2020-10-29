import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import { AppBarProps, withStyles } from "@material-ui/core";
import { SjColorPalette } from "../colors/sj";

export const SjAppBar = withStyles({
  colorDefault: {
    backgroundColor: SjColorPalette.primary.main,
    color: SjColorPalette.primary.text,
  },
  colorPrimary: {
    backgroundColor: SjColorPalette.primary.dark,
    color: SjColorPalette.primary.text,
  },
  colorSecondary: {
    backgroundColor: SjColorPalette.primary.light,
    color: SjColorPalette.primary.text,
  },
  colorTransparent: {
    backgroundColor: `${SjColorPalette.primary.main}00`,
    boxShadow: "none",
    color: SjColorPalette.primary.contrastText,
  },
})((props: AppBarProps) => <AppBar color="default" {...props} />);

export default SjAppBar;
