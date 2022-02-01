export const validateInput = (text) => {
  if (!text.match(/^[a-zA-Z0-9 ]+$/)) {
    return false;
  } else {
    return true;
  }
};

export const validateWatchList = (text, watchLists) => {
  for (let index = 0; index < watchLists.length; index++) {
    if (text.toUpperCase() === watchLists[index].title.toUpperCase()) {
      return false;
    }
  }
  return true;
};
