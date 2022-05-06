import { style } from "@vanilla-extract/css";

export const welcomeWrapper = style({
  height: "100vh",
  width: "100vw",
});

export const bgImage = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "101vh",
  width: "100vw",
});

export const button = style({
  top: "45%",
  left: "38%",
  zIndex: 2,
  position: "absolute",
  cursor: "pointer",
  transform: "scale(0.75)",
  filter: "saturate(60%)",
  ":hover": {
    transform: "scale(0.75)",
    filter: "saturate(100%)",
  },
});
