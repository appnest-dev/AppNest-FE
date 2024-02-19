export const generateInitialValue = (type: string) => {
  switch (type) {
    case "checkbox":
    case "boolean":
      return false;
    default:
      return "";
  }
};
