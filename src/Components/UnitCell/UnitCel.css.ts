import { style } from "@vanilla-extract/css";

export const cellWrapper = style({
  position: "relative",
  width: "max-content",
  maxWidth: "130px",
  border: "none",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(100, 255, 255, 0.2)",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.01)",
  },
});

export const cellWrapperSideBar = style({
  position: "relative",
  width: "max-content",
  maxWidth: "80px",
  border: "none",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(100, 255, 255, 0.2)",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.01)",
  },
});
export const cellWrapperOnMouseOver = style({
  position: "relative",
  width: "max-content",
  maxWidth: "130px",
  border: "none",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(100, 255, 255, 0.2)",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.01)",
  },
});

export const hp = style({
  color: "rgb(48, 28, 13)",
  fontWeight: "bold",
  marginBottom: 10,
  padding: "1px 4px 1px 4px",
  borderRadius: 3,
  backgroundColor: "rgba(230, 230, 230, 0.15)",
});

export const image = style({
  width: "130px",
});

export const imageSideBar = style({
  width: "100px",
});

export const deadImage = style({
  position: "absolute",
  zIndex: 1,
  width: "100px",
});

export const deadImageSideBar = style({
  position: "absolute",
  zIndex: 1,
  marginTop: "20px",
  width: "80px",
});

export const paralyzeImage = style({
  marginTop: "30px",
  position: "absolute",
  width: "100%",
  opacity: "0.7",
});

export const paralyzeImageSideBar = style({
  marginTop: "30px",
  position: "absolute",
  width: "100%",
  opacity: "0.7",
});

export const defendImage = style({
  marginTop: "30px",
  position: "absolute",
  width: "50%",
  opacity: "0.9",
});

export const defendImageSideBar = style({
  marginTop: "30px",
  position: "absolute",
  width: "50%",
  opacity: "0.9",
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

export const hpBackgroundSideBar = style({
  position: "absolute",
  zIndex: -1,
  borderRadius: 20,
  opacity: "0.5",
  width: "100%",
  maxHeight: "100%",
  bottom: 0,
});
