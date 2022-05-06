import { keyframes, style } from "@vanilla-extract/css";

export const modalWrapper = style({
  position: "absolute",
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const modal = style({
  height: "20%",
  width: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  backgroundColor: "#f4a261",
  padding: 15,
  fontSize: "30px",
  fontWeight: "bold",
});
