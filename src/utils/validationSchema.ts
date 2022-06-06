import * as yup from "yup";
// import moment from "moment"
import formModel from "./formModel";
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    pincode,
    country,
    username,
    password,
    confirmPassword,
  },
} = formModel;

export default [
  yup.object().shape({
    [firstName.name]: yup.string().required(firstName.requiredErrorMsg),
    [lastName.name]: yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [pincode.name]: yup
      .string()
      .required(`${pincode.requiredErrorMsg}`)
      .matches(/^[0-9]+$/, "Pincode must contain only digits")
      .test(
        "len",
        `${pincode.invalidErrorMsg}`,
        (val) => val && val.length === 6
      ),
    [country.name]: yup
      .string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
  }),
];
