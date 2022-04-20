import { style } from "@vanilla-extract/css";

export const AppWrapper = style({
  position: "relative",
  height: "100vh",
});

export const Arena = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
