import { style } from "@vanilla-extract/css";

export const AppWrapper = style({
  position: "relative",
  height: "100vh",
});

export const Arena = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const team = style({
  padding: "10px 80px 10px 80px",
  borderRadius: 10,
  backgroundColor: "rgba(0 ,0 ,0,0.05)",
  margin: "10px 0",
});
