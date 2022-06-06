import "../../antd/main.css";  

import { Table, TableColumnProps, TableProps } from "antd";
import { FunctionComponent } from "react";

export interface ExtendedDatePickerProps {
  bordered?: boolean;
}

export const TableAntd: FunctionComponent<any> = (props) => {
  const checkTodo = (): boolean => {
    if (props.columns.length === 0) {
      return false;
    }
    return true;
  };

  return (
    <Table
      style={{
        marginBottom: "20px",
        borderRadius: "10px",
        width: "700px",
        backgroundColor: "pink",
        marginTop: "20px",
        marginLeft: "30px",
        margin:'auto'
      }}
      bordered
      size="small"
      columns={checkTodo() && props.columns}
      dataSource={props.data}
      {...props}
    />
  );
};
