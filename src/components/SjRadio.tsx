import * as React from "react";
import Radio from "@material-ui/core/Radio";
import { createStyles, RadioProps, withStyles } from "@material-ui/core";
import { SjColorPalette } from "../colors/sj";

const SjRadio = withStyles(() =>
  createStyles({
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
      color: SjColorPalette.primary.light,
      "&$checked": {
        color: SjColorPalette.primary.light,
      },
    },
    checked: {
      color: SjColorPalette.primary.dark,
    },
  })
)((props: RadioProps) => <Radio color="default" {...props} />);

export default SjRadio;
