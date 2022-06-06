import "antd/dist/antd.css";

import { DatePicker as AntdDatePicker, DatePickerProps } from "antd";
import { FunctionComponent } from "react";

export interface ExtendedDatePickerProps {
  fullWidth?: boolean;
}
export type DatePickerLocalisedProps = DatePickerProps &
  ExtendedDatePickerProps;

export const defaultDateFormats = [
  "DD.MM.YYYY.",
  "DD.MM.YYYY",
  "DDMMYYYY",
  "DDMMYY",
];

export const DatePickerAntd: FunctionComponent<DatePickerLocalisedProps> = (
  props
) => {
  return (
    <AntdDatePicker
      style={props.fullWidth ? { width: "100%" } : undefined}
      format={defaultDateFormats}
      {...props}
    />
  );
};
