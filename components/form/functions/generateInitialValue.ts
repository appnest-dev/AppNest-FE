export const generateInitialValue = (type: string) => {
  switch (type) {
    case "checkbox":
    case "boolean":
    case "switch":
      return false;
    default:
      return "";
  }
};
