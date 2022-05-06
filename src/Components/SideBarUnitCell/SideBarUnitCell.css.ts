import { style } from "@vanilla-extract/css";

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
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.01)",
  },
});

export const imageSideBar = style({
  width: "100px",
});

export const deadImageSideBar = style({
  position: "absolute",
  zIndex: 1,
  marginTop: "20px",
  width: "80px",
});

export const paralyzeImageSideBar = style({
  marginTop: "30px",
  position: "absolute",
  width: "100%",
  opacity: "0.7",
});

export const defendImageSideBar = style({
  marginTop: "30px",
  position: "absolute",
  width: "50%",
  opacity: "0.9",
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
