import { style } from "@vanilla-extract/css";

export const cellWrapper = style({
  position: "relative",
  width: "max-content",
  maxWidth: "130px",
  border: "none",
  borderRadius: 20,
  boxShadow: "5px 5px 45px black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(100, 255, 255, 0.1)",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.01)",
  },
});

export const hp = style({
  fontWeight: "bold",
  marginBottom: 10,
});

export const image = style({
  width: "130px",
});

export const deadImage = style({
  position: "absolute",
  zIndex: 1,
  width: "100px",
});

export const paralyzeImage = style({
  marginTop: "30px",
  position: "absolute",
  width: "100%",
  opacity: "0.7",
});

export const hpBackground = style({
  position: "absolute",
  zIndex: -1,
  borderRadius: 20,
  opacity: "0.4",
  width: "100%",
  maxHeight: "100%",
  bottom: 0,
});
