import { style } from "@vanilla-extract/css";

export const countDownWrapper = style({
  position: "absolute",
  top: 50,
  right: 150,
  fontSize: "24px",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "rgb(0,0,0,0.15)",
  padding: "10px 20px 10px 20px ",
  borderRadius: 15,
  minWidth: 150,
  maxWidth: 150,
  minHeight: 30,
  maxHeight: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
});

export const clockNormal = style({
  fontSize: "24px",
  color: "white",
});

export const clockExpire = style({
  fontSize: "28px",
  color: "red",
});
