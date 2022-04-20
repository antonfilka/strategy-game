import { keyframes, style } from "@vanilla-extract/css";

export const pointerWrapper = style({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "8%",
  margin: 30,
});

export const slider = style({
  height: "80%",
  width: "20%",
  backgroundColor: "rgb(93,53,37, 0.6)",
  borderRadius: "8px",
  filter: "blur(1px)",
});

export const pointer = style({
  position: "absolute",
  zIndex: 1,
  right: "30px",
  width: "90px",
  fontSize: "22px",
  backgroundColor: "rgb(196, 107, 83, 0.9)",
  padding: "6px 20px 6px 20px",
  borderRadius: "8px",
  top: "76%",
  transition: "all 0.5s linear",
});

export const moveToA = keyframes({
  "0%": { top: "76%" },
  "100%": { top: "24%" },
});

export const moveToB = keyframes({
  "0%": { top: "24%" },
  "100%": { top: "76%" },
});
