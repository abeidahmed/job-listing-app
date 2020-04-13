export const fieldValidation = (errorArray, errType) => {
  if (errorArray) {
    for (let i = 0; i < errorArray.length; i++) {
      if (errorArray[i].startsWith(errType)) {
        return errorArray[i].replace(`${errType}: `, "");
      }
    }
  }
};
