import { Checkbox, CheckboxProps, withStyles } from "@material-ui/core";
import React from "react";
import { SjColorPalette } from "../colors/sj";

const SjCheckbox = withStyles({
  root: {
    color: SjColorPalette.primary.main,
    "&$checked": {
      color: SjColorPalette.primary.main,
    },
  },
  colorPrimary: {
    color: SjColorPalette.primary.dark,
    "&$checked": {
      color: SjColorPalette.primary.dark,
    },
  },
  colorSecondary: {
    color: SjColorPalette.secondary.main,
    "&$checked": {
      color: SjColorPalette.secondary.main,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default SjCheckbox;
