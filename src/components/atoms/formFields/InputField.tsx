import { FormHelperText, TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";
import React, { FC } from "react";
import { at, isError } from "lodash";

interface PropsType {
  errorText?: string;
  defaultProps?: TextFieldProps;
}

const InputField: FC<PropsType> = (props) => {
  const { errorText, ...restProps } = props;
  const [field, meta] = useField(props.defaultProps.name);

  const [touched, error] = at(meta, "touched", "error");

  const isFieldError: boolean = touched && error && true;

  const renderHelperText = () => {
    const [touched, error] = at(meta, "touched", "error");

    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  };

  return (
    <>
      {/* <div>InputField</div> */}

      <TextField
        type="text"
        error={isFieldError ? true : false}
        helperText={renderHelperText()}
        {...field}
        {...restProps.defaultProps}
      />
    </>
  );
};

export default InputField;
