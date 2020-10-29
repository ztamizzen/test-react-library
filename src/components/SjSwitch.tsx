import * as React from "react";
import {
  createStyles,
  Switch,
  SwitchProps,
  withStyles,
} from "@material-ui/core";
import { SjColorPalette } from "../colors/sj";

const SjSwitchStyles = {
  switchBase: {
    color: SjColorPalette.primary.dark,
    "&$checked": {
      color: SjColorPalette.primary.main,
    },
  },
  colorPrimary: {
    color: SjColorPalette.primary.main,
    "&$checked": {
      color: SjColorPalette.primary.dark,
    },
  },
  colorSecondary: {
    color: SjColorPalette.secondary.main,
    "&$checked": {
      color: SjColorPalette.secondary.dark,
    },
  },
  checked: {
    color: SjColorPalette.primary.dark,
  },
  track: {
    backgroundColor: SjColorPalette.primary.light,
  },
};

export default withStyles(
  createStyles(SjSwitchStyles)
)((props: SwitchProps) => <Switch color="default" {...props} />);
