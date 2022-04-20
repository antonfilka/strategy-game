import { style } from "@vanilla-extract/css";

export const cellWrapper = style({
  width: "max-content",
  border: "none",
  borderRadius: 20,
  boxShadow: "5px 5px 45px black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgb(100, 255, 255, 0.1)",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.01)",
  },
});

export const image = style({
  width: "160px",
});
