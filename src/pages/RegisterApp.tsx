// import React from "react";

import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import initialValues from "../utils/initialValues";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Wrapper } from "../components/layout";
import { useState } from "react";
import validationSchema from "../utils/validationSchema";
import { getDatabase, ref, onValue } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";

import { AddressForm } from "../components/organisms/forms";

import formModel from "../utils/formModel";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import CheckoutSuccess from "../components/organisms/forms/checkoutSuccess";
import CredentialForm from "../components/organisms/forms/credentialForm";
import ReviewDetails from "../components/organisms/review";
import database from "../database/Firebase";
const { formField } = formModel;
const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;

    case 1:
      return <CredentialForm formField={formField} />;

    case 2:
      return <ReviewDetails />;
  }
};

const steps = ["Personal Details", "Credential Details", "Review Your Details"];

const RegisterApp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const selectedValidationSchema = validationSchema[activeStep];
  const isLast = activeStep === steps.length - 1;
  // const styles = useAppStyles()

  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    // await sleep(1000);

    database.ref(values.username).set({
      ...values,
    });

    // await sleep (1000);
    // const db = getDatabase()

    // const data = ref(db, 'Final-form') // CHANGE 'chars' TO YOUR DATABASE NAME
    // onValue(data, (snapshot) => {
    //   console.log([snapshot.val()])
    // })

    // localStorage.setItem("data", JSON.stringify(values)); //store colors

    let a = JSON.parse(localStorage.getItem("all_users_db"));

    if (JSON.parse(localStorage.getItem("all_users_db")) === null) {
      // localStorage.setItem("all_users_db", JSON.stringify([values]));
      a = [values];
    } else {
      console.log("inside else");
      a.push(values);
      // (JSON.parse(localStorage.getItem("all_users_db"))).push([values]);

        
    }

    // localStorage.setItem('all_users_db', (JSON.stringify((JSON.parse(localStorage.getItem("all_users_db"))))));

    localStorage.setItem('all_users_db', JSON.stringify(a));

    actions.setSubmitting(false);
    setActiveStep((prev) => prev + 1);
  };

  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (isLast) {
      submitForm(values, actions);
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Box
          sx={{
            width: "120vh",
            padding: "25px",
            margin: "auto",
            border: "3px solid cyan",
            borderRadius: "25px",
            boxShadow: "0px 0px 25px 10px rgba(255,255,255,1)",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        >
          <Box>
            <Typography
              sx={{ margin: "0.5vh 5vh 2vh 5vh" }}
              component="h1"
              variant="h4"
              align="center"
            >
              Registration Form
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Stepper
                sx={
                  {
                    // backgroundColor: 'success.main',
                    // color:'black'
                  }
                }
                activeStep={activeStep}
                // alternativeLabel
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            {activeStep === steps.length ? (
              <CheckoutSuccess />
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={selectedValidationSchema}
                onSubmit={handleSubmit}
              >
                {(formikProps) => (
                  <Form>
                    {renderStepContent(activeStep)}
                    <br />
                    <br />
                    <div>
                      {activeStep <= 2 && (
                        <Button
                          onClick={() => setActiveStep((prev) => prev - 1)}
                        >
                          Back
                        </Button>
                      )}

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        // disabled={formikProps.isSubmitting}
                      >
                        {isLast ? "Register" : "Next"}
                      </Button>
                      {formikProps.isSubmitting && <CircularProgress />}
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default RegisterApp;
