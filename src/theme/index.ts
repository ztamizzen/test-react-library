import { createMuiTheme } from "@material-ui/core";
import { svSE } from "@material-ui/core/locale";

const SjTheme = createMuiTheme(
    {
        typography: {
            fontFamily: [
                "sj_sans",
                "Helvetica Neue",
                "Helvetica",
                "Arial",
                "sans-serif",
            ].join(","),
        },
    },
    svSE
);

export default SjTheme;
