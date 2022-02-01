export const validateInputUsername = (text) => {
  if (!text.match(/^\d*[a-zA-Z][a-zA-Z\d]*$/)) {
    return false;
  } else {
    return true;
  }
};

export const validateInput = (text) => {
  if (!text.match(/^\d*[a-zA-Z0-9 ][a-zA-Z0-9 \d]*$/)) {
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
