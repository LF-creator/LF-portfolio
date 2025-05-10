export const getImageUrl = (path) => {
    console.log("Loading image:", path);
    return new URL(`/assets/${path}`, import.meta.url).href;
  };