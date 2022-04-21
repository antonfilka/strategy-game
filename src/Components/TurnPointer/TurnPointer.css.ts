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
  width: "10%",
  backgroundColor: "rgb(93,53,37, 0.6)",
  borderRadius: "8px",
  filter: "blur(1px)",
  opacity: "0.5",
});

export const pointer = style({
  position: "absolute",
  zIndex: 1,
  right: "2px",
  width: "150px",
  top: "76%",
  transition: "all 0.5s linear",
  color: "rgb(227, 233, 194)",
  fontWeight: "bold",
});

export const pointerImage = style({
  height: "70px",
  width: "150px",
});

export const pointerText = style({
  position: "absolute",
  top: "21px",
  right: "27px",
  fontSize: "22px",
});

export const moveToA = keyframes({
  "0%": { top: "76%" },
  "100%": { top: "24%" },
});

export const moveToB = keyframes({
  "0%": { top: "24%" },
  "100%": { top: "76%" },
});
