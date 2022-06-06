import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";
import React, { FC } from "react";
import { at } from "lodash";

interface PropsType {
  errorText?: string;
  defaultProps?: TextFieldProps;
}

const PasswordField: FC<PropsType> = (props) => {
  const { errorText, ...restProps } = props;
  const [field, meta] = useField(props.defaultProps.name);

  const renderHelperText = () => {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  };

  return (
    <>
      {/* <div>InputField</div> */}

      <TextField
        type="password"
        helperText={renderHelperText()}
        {...field}
        {...restProps.defaultProps}
      />
    </>
  );
};

export default PasswordField;
