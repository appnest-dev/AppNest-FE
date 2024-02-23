import { InputProps } from "../Input";
import { ValidationTypes, validation } from "@/utils/consts";

type Auth = {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  newPassword?: string;
  newPasswordConfirmation?: string;
  OTC?: string;
};

export type Values = Auth;

const between = (number: number, min: number, max: number) =>
  number >= min && number <= max;

export const validate = (values: Values, inputs: InputProps[]) => {
  let errors: Values = {};

  Object.values(values).forEach((inputValue, index) => {
    const input = inputs[index].id as keyof Values;

    // required check
    if (inputValue === "" && inputs[index].required) {
      return (errors[input] = "This is required");
    }

    // confirmation check
    if (
      inputs[index].confirmationId &&
      values[inputs[index].confirmationId as keyof Values] !== inputValue
    ) {
      return (errors[input] = `${inputs[index].type} doesn't match`);
    }

    // validation check
    const validationType =
      validation[inputs[index].type as keyof ValidationTypes];

    if (
      validationType &&
      (!validationType.regExp.test(inputValue) ||
        !between(inputValue.length, validationType.min, validationType.max))
    ) {
      return (errors[input] = `Invalid ${inputs[index].type}`);
    }
  });

  return errors;
};
