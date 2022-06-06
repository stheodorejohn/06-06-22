export default {
  formId: "checkoutForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "First name*",
      requiredErrorMsg: "First name is required",
    },
    lastName: {
      name: "lastName",
      label: "Last name*",
      requiredErrorMsg: "Last name is required",
    },
    address1: {
      name: "address1",
      label: "Address Line 1*",
      requiredErrorMsg: "Address Line 1 is required",
    },
    address2: {
      name: "address2",
      label: "Address Line 2",
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
    },
    state: {
      name: "state",
      label: "State/Province/Region",
    },
    pincode: {
      name: "pincode",
      label: "Pincode*",
      requiredErrorMsg: "Pincode is required",
      invalidErrorMsg: "Pincode is not valid (e.g. 623001)",
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
    },
    useAddressForPaymentDetails: {
      name: "useAddressForPaymentDetails",
      label: "Use this address for payment details",
    },
    username: {
      name: "username",
      label: "UserName*",
      requiredErrorMsg: "Username is required",
    },
    password: {
      name: "password",
      label: "Password*",
      requiredErrorMsg: "Password is required",
      invalidErrorMsg: "Password is not matching",
    },
    confirmPassword: {
      name: "confirmPassword",
      label: "Confirm Password*",
      requiredErrorMsg: "Password is required",
      invalidErrorMsg: "Password is not matching",
    },
  },
};
