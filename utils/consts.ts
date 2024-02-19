export type ValidationTypes = {
  email: string;
  password: string;
};

export const validation = {
  email: {
    regExp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    msg: "example@example.com (min 10 characters, max 40 characters)",
    min: 10,
    max: 40,
  },
  password: {
    regExp:
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}$/,
    msg: "Min 8 characters, max 30 characters, at least one letter, number and special character",
    min: 8,
    max: 30,
  },
};
