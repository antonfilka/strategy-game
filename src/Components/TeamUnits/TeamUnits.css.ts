import { style } from "@vanilla-extract/css";

export const teamWrapper = style({
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const teamUnits = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const defendButton = style({
  display: "flex",
  alignItems: "center",
  width: "120px",
  marginLeft: "20px",
  border: "none",
  borderRadius: 5,
  color: "rgb(0, 0, 0, 0.8)",
  fontSize: "16px",
  boxShadow: "2px 5px 5px rgb(0, 0, 0, 0.3)",
  backgroundColor: "rgba(203, 122, 1)",
  padding: 15,
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.01)",
  },
  ":active": {
    transform: "scale(0.95)",
  },
});
