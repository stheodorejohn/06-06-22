import model from "./formModel"

const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    pincode,
    country,
    useAddressForPaymentDetails,
    username,
    password,
    confirmPassword,
    
  },
} = model

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [city.name]: "",
  [pincode.name]: "",
  [country.name]: "",
  [useAddressForPaymentDetails.name]: false,
  [username.name]: "",
  [password.name]: "",
  [confirmPassword.name]: "",
}