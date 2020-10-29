import { ColorPartial, PaletteColor } from "@material-ui/core/styles/createPalette";

const SJ: ColorPartial = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
};
export default SJ;

type IColorPaletteColor = PaletteColor & { text?: string; }

export interface IColorPalette {
    primary: IColorPaletteColor;
    secondary: IColorPaletteColor;
}

export const BackgroundOpacity = "0a";

export const SjColorPalette: IColorPalette = {
    primary: {
        light: "#55b969",
        main: "#1a883d",
        dark: "#005a12",
        contrastText: "black",
        text: "white"
    },
    secondary: {
        light: "#8cff94",
        main: "#56d164",
        dark: "#0c9f36",
        contrastText: "white",
        text: "black"
    }
};
