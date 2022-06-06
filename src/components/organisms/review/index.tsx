import React from "react";
import { useFormikContext } from "formik";
import {  Grid, Typography } from "@mui/material";

import AddressDetails from "./AddressDetails";
import CredentialDetails from "./CredentialDetails";
// import { Typography } from "@mui/material/styles/createTypography";


const ReviewDetails = () => {
    const { values} = useFormikContext()

    return (
        <>
        <Typography variant="h6" gutterBottom>
        Registration Details Summary
        </Typography>
        <Grid container spacing={2}>
<AddressDetails formValues={values} />
<CredentialDetails  formValues={values}/>
</Grid>
        </>

    );
}

export default ReviewDetails;