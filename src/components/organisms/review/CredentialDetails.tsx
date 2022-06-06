import React, { FC } from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { FormikValues } from "formik";
import moment from "moment";

interface PropsType {
  formValues: FormikValues;
}

const CredentialDetails: FC<PropsType> = (props) => {
  const {
    formValues: { username },
  } = props;

  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom>
        Credential Details
      </Typography>

      <Grid container>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom> Username</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom>{username}</Typography>
          </Grid>
        </>
      </Grid>
    </Grid>
  );
};

export default CredentialDetails;
