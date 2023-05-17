export const getLocalUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};
