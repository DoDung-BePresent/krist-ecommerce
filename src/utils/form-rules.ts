import { Rule } from "antd/es/form";

type SignInRulesType = {
  email: Rule[];
  password: Rule[];
};

type SignUpRulesType = {
  firstName: Rule[];
  lastName: Rule[];
  email: Rule[];
  password: Rule[];
  confirmPassword: Rule[];
};

export const SignInRules: SignInRulesType = {
  email: [
    {
      required: true,
      message: "Email is required!",
    },
    {
      type: "email",
      message: "Invalid email address!",
    },
  ],
  password: [
    {
      required: true,
      message: "Password is required!",
    },
    {
      min: 6,
      message: "Password must be at least 6 characters long!",
    },
    {
      max: 50,
      message: "Password cannot exceed 50 characters long!",
    },
    {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
      message: "Password must include letters and numbers!",
    },
  ],
};

export const SignUpRules: SignUpRulesType = {
  firstName: [
    {
      required: true,
      message: "First name is required!",
    },
    {
      min: 2,
      message: "First name must be at least 2 characters long!",
    },
    {
      max: 50,
      message: "First name cannot exceed 50 characters long!",
    },
    {
      pattern: /^[A-Za-z\s]+$/,
      message: "First name must contain only letters and spaces!",
    },
  ],
  lastName: [
    {
      required: true,
      message: "Last name is required!",
    },
    {
      min: 2,
      message: "Last name must be at least 2 characters long!",
    },
    {
      max: 50,
      message: "Last name cannot exceed 50 characters long!",
    },
    {
      pattern: /^[A-Za-z\s]+$/,
      message: "Last name must contain only letters and spaces!",
    },
  ],
  email: [
    {
      required: true,
      message: "Email is required!",
    },
    {
      type: "email",
      message: "Invalid email address!",
    },
  ],
  password: [
    {
      required: true,
      message: "Password is required!",
    },
    {
      min: 6,
      message: "Password must be at least 6 characters long!",
    },
    {
      max: 50,
      message: "Password cannot exceed 50 characters long!",
    },
    {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
      message: "Password must include letters and numbers!",
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Please confirm password!",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("Passwords do not match!"));
      },
    }),
  ],
};
