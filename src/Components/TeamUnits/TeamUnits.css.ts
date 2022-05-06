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
  justifyContent: "center",
  width: "120px",
  marginLeft: "20px",
  border: "none",
  borderRadius: 5,
  color: "rgb(0, 0, 0, 0.8)",
  fontSize: "15px",
  fontWeight: "bold",
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

export const attackButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "120px",
  marginLeft: "20px",
  border: "none",
  borderRadius: 5,
  color: "rgb(0, 0, 0, 0.8)",
  fontSize: "15px",
  fontWeight: "bold",
  boxShadow: "2px 5px 5px rgb(0, 0, 0, 0.3)",
  backgroundColor: "rgba(218, 79, 54)",
  padding: 15,
  cursor: "pointer",

  ":hover": {
    transform: "scale(1.01)",
  },
  ":active": {
    transform: "scale(0.95)",
  },
});

export const cancelButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "120px",
  marginLeft: "20px",
  border: "none",
  borderRadius: 5,
  color: "rgb(0, 0, 0, 0.8)",
  fontSize: "15px",
  fontWeight: "bold",
  boxShadow: "2px 5px 5px rgb(0, 0, 0, 0.3)",
  backgroundColor: "#b7b7a4",
  padding: 15,
  cursor: "pointer",

  ":hover": {
    transform: "scale(1.01)",
  },
  ":active": {
    transform: "scale(0.95)",
  },
});

export const buttons = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "20px",
});

export const hidden = style({
  visibility: "hidden",
});
