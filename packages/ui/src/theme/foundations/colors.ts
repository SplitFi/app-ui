import type { DeepPartial, Theme } from "@splitfi/ui";

/** extend additional color here */
const extendedColors = {
  black: "#070707",
  gray: {
    "50": "#f9fafa",
    "100": "#f1f1f1",
    "200": "#e6e7e9",
    "300": "#a9adb2",
    "400": "#797f88",
    "500": "#4d5560",
    "600": "#4A4E53",
    "700": "#363A3D",
    "800": "#232528",
    "900": "#101112",
  },
  purple: {
    "50": "#f9f6fd",
    "100": "#e5daf8",
    "200": "#d3bef4",
    "300": "#b795ec",
    "400": "#a379e7",
    "500": "#8952e0",
    "600": "#7434db",
    "700": "#6023c0",
    "800": "#4f1d9e",
    "900": "#3b1676",
  },
  pink: {
    "50": "#fdf5f9",
    "100": "#f8d9e7",
    "200": "#f3b9d3",
    "300": "#eb8db8",
    "400": "#e56ba2",
    "500": "#dc3882",
    "600": "#c4246c",
    "700": "#a01d58",
    "800": "#7d1745",
    "900": "#5d1133",
  },
  red: {
    "50": "#fdf6f5",
    "100": "#f8d9d7",
    "200": "#f2b7b4",
    "300": "#ea8c87",
    "400": "#e5726b",
    "500": "#dd4840",
    "600": "#c72d25",
    "700": "#a1241e",
    "800": "#891f19",
    "900": "#641712",
  },
  orange: {
    "50": "#fdfaf6",
    "100": "#f9ebdb",
    "200": "#f1d4b1",
    "300": "#e6b273",
    "400": "#dc9239",
    "500": "#c37b24",
    "600": "#a5681e",
    "700": "#835318",
    "800": "#674113",
    "900": "#553610",
  },
  yellow: {
    "50": "#fefefc",
    "100": "#fbf9ea",
    "200": "#f4eec2",
    "300": "#ece192",
    "400": "#dfce4b",
    "500": "#bba922",
    "600": "#95871c",
    "700": "#746915",
    "800": "#574f10",
    "900": "#48410d",
  },
  green: {
    "50": "#f5fdf9",
    "100": "#c6f5e0",
    "200": "#83e9bb",
    "300": "#28d889",
    "400": "#23bd78",
    "500": "#1ea367",
    "600": "#198755",
    "700": "#136942",
    "800": "#105636",
    "900": "#0d472d",
  },
  teal: {
    50: "#C0D6D6",
    100: "#B3CECE",
    200: "#9ABFBF",
    300: "#81AFAF",
    400: "#689F9F",
    500: "#578888",
    600: "#476F6F",
    700: "#375656",
    800: "#273D3D",
    900: "#111B1B",
    950: "#060A0A",
  },
  cyan: {
    "50": "#f4fbfd",
    "100": "#d0eef7",
    "200": "#bae7f3",
    "300": "#a2deee",
    "400": "#53c2e1",
    "500": "#2ab4d9",
    "600": "#24a2c4",
    "700": "#1e86a2",
    "800": "#196e85",
    "900": "#135567",
  },
  blue: {
    "50": "#f1f6fd",
    "100": "#cde0f6",
    "200": "#a8c8f0",
    "300": "#7fafe8",
    "400": "#5896e1",
    "500": "#347fdb",
    "600": "#236abf",
    "700": "#1b5192",
    "800": "#164278",
    "900": "#123662",
  },
  sand: {
    50: "#F9F3E7",
    100: "#F7EEDF",
    200: "#F4E8D2",
    300: "#EAD4AB",
    400: "#DEBD7F",
    500: "#D3A652",
    600: "#BC8C30",
    700: "#906B25",
    800: "#634A19",
    900: "#36280E",
  },
  primary: {
    50: "#B8C7FF",
    100: "#A3B7FF",
    200: "#7A98FF",
    300: "#5278FF",
    400: "#2958FF",
    500: "#0038FF",
    600: "#002CC7",
    700: "#001F8F",
    800: "#001357",
    900: "#00071F",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
