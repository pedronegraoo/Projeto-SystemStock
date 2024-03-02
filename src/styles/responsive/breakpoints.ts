const points = {
  sm: "425px",
  md: "560px",
  lg: "768px",
  xl: "1024px",
};

const breakpoints = {
  sm: `(max-width: ${points.sm})`,
  md: `(max-width: ${points.md})`,
  lg: `(max-width: ${points.lg})`,
  xl: `(max-width: ${points.xl})`,
};

export default breakpoints;
