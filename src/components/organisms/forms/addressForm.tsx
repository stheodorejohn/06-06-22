// import { CssBaseline, Paper } from "@mui/material";

import { Grid, Typography } from "@mui/material";
import { FormikValues } from "formik";
import { FC } from "react";
import { InputField } from "../../atoms/formFields";

import  {SelectField} from "../../atoms/formFields" ;


interface PropsType {
  formField: FormikValues;
}

const AddressForm: FC<PropsType> = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      pincode,
      country,
     
    },
  } = props;

  return (
    <>
      {/* <div>Address Form</div> */}
      <Typography>Kindly fill the Personal Details requested below </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: firstName.name,
              label: firstName.label,
              fullWidth: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: lastName.name,
              label: lastName.label,
              fullWidth: true,
            }}
          />
        </Grid> 

        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: address1.name,
              label: address1.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: address2.name,
              label: address2.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: pincode.name,
              label: pincode.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        
      </Grid>
    </>
  );
};



const cities = [
    {
      value: undefined,
      label: "None",
    },
    {
      value: "Ahmedabad",
      label: "Ahmedabad",
    },
    {
      value: "Bangalore",
      label: "Bangalore",
    },
    {
      value: "Chennai",
      label: "Chennai",
    },
    {
      value: "Cochin",
      label: "Cochin",
    },
    {
      value: "Delhi",
      label: "Delhi",
    },
    {
      value: "Hyderabad",
      label: "Hyderabad",
    },
    {
      value: "Jaipur",
      label: "Jaipur",
    },
    {
      value: "Madurai",
      label: "Madurai",
    },
    {
      value: "Trichy",
      label: "Trichy",
    },
    {
      value: "Kolkata",
      label: "Kolkata",
    },
    {
      value: "Mumbai",
      label: "Mumbai",
    },
    {
      value: "Nagpur",
      label: "Nagpur",
    },
  ]
  
  const states = [
    {
      value: undefined,
      label: "None",
    },
    {
      value: "Delhi",
      label: "Delhi",
    },
    {
      value: "Gujarat",
      label: "Gujarat",
    },
    {
      value: "Karnataka",
      label: "Karnataka",
    },
    {
      value: "Kerala",
      label: "Kerala",
    },
    {
      value: "Maharashtra",
      label: "Maharashtra",
    },
    {
      value: "Orissa",
      label: "Orissa",
    },
    {
      value: "Puducherry",
      label: "Puducherry",
    },
    {
      value: "Tamil Nadu",
      label: "Tamil Nadu",
    },
    {
      value: "Uttarakhand",
      label: "Uttarakhand",
    },
  ]
  
  const countries = [
    {
      value: null,
      label: "None",
    },

    {
      value: "India",
      label: "India",
    },
    {
      value: "United States",
      label: "United States",
    },
    {
      value: "China",
      label: "China",
    },
  ]
  


export default AddressForm;
