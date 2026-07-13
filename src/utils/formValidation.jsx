export const loginValidation = {
  name: {
    required: "Name is required",
    minLength: { value: 3, message: "Minimum length of name is 2" },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid Email address",
    },
  },
  password: {
    required: "password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Password must contain at least one letter and one number",
    },
  },
};
